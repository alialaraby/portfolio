import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";
import { gzipSync } from "node:zlib";

import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

const distDir = resolve("dist");

const MAX_HTML_BYTES = 24 * 1024;
const MAX_HTML_GZIP_BYTES = 7 * 1024;
const MAX_CSS_BYTES = 16 * 1024;
const MAX_CSS_GZIP_BYTES = 5 * 1024;
const MAX_FONT_BYTES = 80 * 1024;
const MAX_PAGE_GZIP_BYTES = 140 * 1024;

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const buildExists = (): boolean => {
  try {
    return statSync(join(distDir, "index.html")).isFile();
  } catch {
    return false;
  }
};

const size = (file: string): number => statSync(file).size;
const gzipSize = (file: string): number => gzipSync(readFileSync(file)).length;
const rel = (file: string): string =>
  relative(distDir, file).split(sep).join("/");

const documentOf = (file: string): Document =>
  new JSDOM(readFileSync(file, "utf8")).window.document;

describe.skipIf(!buildExists())("built performance and artifacts", () => {
  const files = buildExists() ? walk(distDir).sort() : [];
  const byExt = (extension: string): string[] =>
    files.filter((file) => extname(file) === extension);
  const html = byExt(".html");
  const css = byExt(".css");
  const fonts = byExt(".woff2");

  it("ships no client JavaScript or source maps", () => {
    expect(
      files.filter((file) => /\.(m?js|cjs|map)$/.test(file)),
      "unexpected script assets",
    ).toEqual([]);

    for (const file of html) {
      const scripts = [...documentOf(file).querySelectorAll("script")];
      const executable = scripts.filter(
        (script) => script.getAttribute("type") !== "application/ld+json",
      );
      expect(executable, `${rel(file)} contains an executable script`).toEqual(
        [],
      );
      expect(
        documentOf(file).querySelector("script[src]"),
        rel(file),
      ).toBeNull();
    }
  });

  it("keeps CSS and HTML within the configured budgets", () => {
    expect(css.length).toBeGreaterThan(0);

    for (const file of css) {
      expect(size(file), rel(file)).toBeLessThanOrEqual(MAX_CSS_BYTES);
      expect(gzipSize(file), `${rel(file)} gzip`).toBeLessThanOrEqual(
        MAX_CSS_GZIP_BYTES,
      );
    }

    for (const file of html) {
      expect(size(file), rel(file)).toBeLessThanOrEqual(MAX_HTML_BYTES);
      expect(gzipSize(file), `${rel(file)} gzip`).toBeLessThanOrEqual(
        MAX_HTML_GZIP_BYTES,
      );
    }
  });

  it("keeps fonts within budget and swaps to avoid invisible or shifting text", () => {
    expect(fonts.length).toBe(3);

    for (const file of fonts) {
      expect(size(file), rel(file)).toBeLessThanOrEqual(MAX_FONT_BYTES);
    }

    const stylesheetPath = css[0];
    if (stylesheetPath === undefined)
      throw new Error("No stylesheet was emitted.");
    const stylesheet = readFileSync(stylesheetPath, "utf8");
    const faces = [...stylesheet.matchAll(/@font-face/g)].length;
    const swaps = [...stylesheet.matchAll(/font-display:\s*swap/g)].length;
    expect(faces).toBeGreaterThan(0);
    expect(swaps, "every @font-face must use font-display: swap").toBe(faces);
  });

  it("keeps the per-page transfer under budget with a single font preload", () => {
    const fontBytes = fonts.reduce((total, file) => total + gzipSize(file), 0);
    const cssBytes = css.reduce((total, file) => total + gzipSize(file), 0);

    for (const file of html) {
      const pageWeight = gzipSize(file) + cssBytes + fontBytes;
      expect(
        pageWeight,
        `${rel(file)} roughly ${String(pageWeight)} bytes`,
      ).toBeLessThanOrEqual(MAX_PAGE_GZIP_BYTES);

      const preloads = [
        ...documentOf(file).querySelectorAll('link[rel="preload"]'),
      ];
      expect(preloads.length, rel(file)).toBe(1);
      expect(preloads[0]?.getAttribute("href"), rel(file)).toContain(
        "ibm-plex-sans-var",
      );
    }
  });

  it("ships only the intended asset inventory", () => {
    const allowed = [
      /^index\.html$/,
      /^404\.html$/,
      /^work\/[a-z0-9-]+\/index\.html$/,
      /^_astro\/[A-Za-z]+\.\w+\.css$/,
      /^fonts\/ibm-plex\/[\w.-]+\.woff2$/,
      /^fonts\/ibm-plex\/LICENSE\.txt$/,
      /^cv\/[\w.-]+\.pdf$/,
      /^og\/[\w.-]+\.(png|svg)$/,
      /^robots\.txt$/,
      /^sitemap\.xml$/,
      /^CNAME$/,
    ];

    for (const file of files) {
      expect(
        allowed.some((pattern) => pattern.test(rel(file))),
        `unexpected asset ${rel(file)}`,
      ).toBe(true);
    }

    expect(html).toHaveLength(5);
    expect(byExt(".pdf")).toHaveLength(1);
    expect(byExt(".png")).toHaveLength(1);
    expect(statSync(join(distDir, "robots.txt")).isFile()).toBe(true);
    expect(statSync(join(distDir, "sitemap.xml")).isFile()).toBe(true);
  });

  it("sizes any future image to avoid layout shift", () => {
    for (const file of html) {
      for (const image of [...documentOf(file).querySelectorAll("img")]) {
        expect(
          image.getAttribute("width"),
          `${rel(file)} img width`,
        ).toBeTruthy();
        expect(
          image.getAttribute("height"),
          `${rel(file)} img height`,
        ).toBeTruthy();
      }
    }
  });
});
