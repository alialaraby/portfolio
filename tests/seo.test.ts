import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

import { site } from "../src/config/site";

const distDir = resolve("dist");
const siteUrl = new URL(site.url);

const htmlFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return path.endsWith(".html") ? [path] : [];
  });

const buildExists = (): boolean => {
  try {
    return statSync(join(distDir, "index.html")).isFile();
  } catch {
    return false;
  }
};

const toRoute = (file: string): string => {
  const path = relative(distDir, file).split(sep).join("/");
  if (path === "index.html") return "/";
  return `/${path.replace(/index\.html$/, "")}`;
};

const readText = (name: string): string =>
  readFileSync(join(distDir, name), "utf8");

const parseHtml = (file: string): Document =>
  new JSDOM(readFileSync(file, "utf8")).window.document;

type JsonLd = Record<string, unknown>;

const parseJsonLd = (text: string | null): JsonLd =>
  JSON.parse(text ?? "null") as JsonLd;

const typesOf = (data: JsonLd): string[] => {
  const type = data["@type"];
  if (Array.isArray(type))
    return type.filter((item): item is string => typeof item === "string");
  return typeof type === "string" ? [type] : [];
};

const jsonLdBlocks = (document: Document): JsonLd[] =>
  [...document.querySelectorAll('script[type="application/ld+json"]')].map(
    (node) => parseJsonLd(node.textContent),
  );

const stringsOf = (value: unknown): string[] =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];

describe.skipIf(!buildExists())("built SEO and discovery", () => {
  const files = buildExists() ? htmlFiles(distDir).sort() : [];
  const contentPages = files.filter((file) => !file.endsWith("404.html"));
  const casePages = files.filter((file) => file.includes(`${sep}work${sep}`));

  it("has unique, non-empty titles and descriptions", () => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const file of contentPages) {
      const document = parseHtml(file);
      const title = document.querySelector("title")?.textContent ?? "";
      const description =
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") ?? "";

      expect(title.length, file).toBeGreaterThan(0);
      expect(description.length, file).toBeGreaterThan(0);
      expect(titles.has(title), `${file} reuses the title "${title}"`).toBe(
        false,
      );
      expect(
        descriptions.has(description),
        `${file} reuses its description`,
      ).toBe(false);

      titles.add(title);
      descriptions.add(description);
    }

    expect(titles.size).toBe(contentPages.length);
  });

  it("sets canonical, Open Graph, and Twitter metadata per page", () => {
    const imageUrl = new URL(site.ogImage.path, siteUrl).href;

    for (const file of contentPages) {
      const document = parseHtml(file);
      const canonical = new URL(toRoute(file), siteUrl).href;

      expect(
        document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
        file,
      ).toBe(canonical);
      expect(
        document
          .querySelector('meta[property="og:url"]')
          ?.getAttribute("content"),
        file,
      ).toBe(canonical);
      expect(
        document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content"),
        file,
      ).toBe(document.querySelector("title")?.textContent);
      expect(
        document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content"),
        file,
      ).toBe(imageUrl);
      expect(
        document
          .querySelector('meta[name="twitter:card"]')
          ?.getAttribute("content"),
        file,
      ).toBe("summary_large_image");
      expect(
        document
          .querySelector('meta[name="twitter:image"]')
          ?.getAttribute("content"),
        file,
      ).toBe(imageUrl);
    }

    expect(statSync(join(distDir, site.ogImage.path)).isFile()).toBe(true);
  });

  it("publishes valid, honest structured data", () => {
    const home = jsonLdBlocks(parseHtml(join(distDir, "index.html")));
    const flatHome = home.map(typesOf).flat();
    expect(flatHome).toContain("ProfilePage");

    for (const data of home) {
      expect(data["@context"]).toBe("https://schema.org");
    }

    const person = home.find((data) =>
      typesOf(data).includes("ProfilePage"),
    )?.mainEntity;
    expect(person).toBeTypeOf("object");
    const personData = person as JsonLd;
    expect(typesOf(personData)).toContain("Person");
    expect(personData.jobTitle).toBe("Senior Backend Engineer");
    const profiles = stringsOf(personData.sameAs);
    expect(profiles.some((url) => url.includes("github.com/alialaraby"))).toBe(
      true,
    );
    expect(profiles.some((url) => url.includes("linkedin.com"))).toBe(true);

    for (const file of casePages) {
      const document = parseHtml(file);
      const blocks = jsonLdBlocks(document);
      const types = blocks.map(typesOf).flat();

      expect(types, file).toContain("TechArticle");
      expect(types, file).toContain("BreadcrumbList");

      const article = blocks.find((data) =>
        typesOf(data).includes("TechArticle"),
      );
      expect(article?.url, file).toBe(new URL(toRoute(file), siteUrl).href);
      expect(article?.headline, file).toBe(
        document.querySelector("h1")?.textContent,
      );

      const breadcrumb = blocks.find((data) =>
        typesOf(data).includes("BreadcrumbList"),
      );
      expect(Array.isArray(breadcrumb?.itemListElement), file).toBe(true);
      expect((breadcrumb?.itemListElement as unknown[]).length, file).toBe(3);
    }
  });

  it("publishes a sitemap covering the indexable routes and a robots policy", () => {
    const sitemap = readText("sitemap.xml");
    expect(sitemap).toContain(
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    );

    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (match) => match[1] ?? "",
    );
    const expected = contentPages
      .map((file) => new URL(toRoute(file), siteUrl).href)
      .sort();
    expect([...locs].sort()).toEqual(expected);

    const robots = readText("robots.txt");
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain(
      `Sitemap: ${new URL("sitemap.xml", siteUrl).href}`,
    );
    expect(sitemap).not.toContain("404");
  });

  it("keeps the 404 out of search and exposes the approved contact and profile URLs", () => {
    const notFound = parseHtml(join(distDir, "404.html"));
    expect(
      notFound.querySelector('meta[name="robots"]')?.getAttribute("content"),
    ).toContain("noindex");

    const home = parseHtml(join(distDir, "index.html"));
    const hrefs = [...home.querySelectorAll("a[href]")].map(
      (anchor) => anchor.getAttribute("href") ?? "",
    );

    expect(hrefs.some((href) => href.startsWith("mailto:"))).toBe(true);
    expect(hrefs.some((href) => href.includes("github.com/alialaraby"))).toBe(
      true,
    );
    expect(hrefs.some((href) => href.includes("linkedin.com"))).toBe(true);
    expect(hrefs.some((href) => href.endsWith(".pdf"))).toBe(true);
  });
});
