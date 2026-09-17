import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { caseStudySchema, homepageSchema } from "../src/content/schema";

const caseStudyDir = resolve("src/content/case-studies");
const caseStudyFiles = readdirSync(caseStudyDir).sort();

const readCaseStudy = (file: string) =>
  readFileSync(resolve(caseStudyDir, file), "utf8");
const frontmatterOf = (source: string) => source.split("---")[1] ?? "";
const bodyOf = (source: string) => source.split("---").slice(2).join("---");

describe("content foundation", () => {
  it("contains every approved case-study source", () => {
    expect(caseStudyFiles).toEqual([
      "fintech-product.md",
      "logistics-platform.md",
      "saudi-utils.md",
    ]);
  });

  it("keeps internal review notes in non-rendered frontmatter", () => {
    for (const file of caseStudyFiles) {
      const source = readCaseStudy(file);
      expect(frontmatterOf(source)).toContain("internalReview:");
      expect(bodyOf(source)).not.toContain("INTERNAL REVIEW");
      expect(bodyOf(source)).not.toMatch(/internalReview:/);
    }
  });

  it("rejects representative malformed case-study metadata", () => {
    const invalid = {
      title: "",
      description: "Too short",
      classification: "private-note",
      route: "/unsafe path",
      order: 0,
    };
    expect(caseStudySchema.safeParse(invalid).success).toBe(false);
  });

  it("rejects incomplete homepage content", () => {
    expect(
      homepageSchema.safeParse({ kind: "homepage", headline: "Incomplete" })
        .success,
    ).toBe(false);
  });

  it("declares Phase 7 metadata and unique routes and orders", () => {
    const routes = new Set<string>();
    const orders = new Set<string>();

    for (const file of caseStudyFiles) {
      const frontmatter = frontmatterOf(readCaseStudy(file));
      expect(frontmatter).toMatch(/^project:\s*\S/m);
      expect(frontmatter).toMatch(/^role:\s*\S/m);
      expect(frontmatter).toContain("diagram:");

      const stepCount = (frontmatter.match(/^\s*- label:/gm) ?? []).length;
      expect(stepCount).toBeGreaterThanOrEqual(3);

      const route = /^route:\s*(\S+)/m.exec(frontmatter)?.[1];
      const order = /^order:\s*(\d+)/m.exec(frontmatter)?.[1];

      if (route === undefined || order === undefined) {
        throw new Error(`Missing route or order in ${file}`);
      }

      routes.add(route);
      orders.add(order);
    }

    expect(routes.size).toBe(caseStudyFiles.length);
    expect(orders.size).toBe(caseStudyFiles.length);
  });

  it("uses only approved public link hosts", () => {
    const allowedHosts = ["github.com", "npmjs.com", "linkedin.com"];

    for (const file of caseStudyFiles) {
      const links = readCaseStudy(file).match(/https?:\/\/[^\s)"\]]+/g) ?? [];

      for (const link of links) {
        const host = new URL(link).hostname;
        expect(
          allowedHosts.some(
            (allowed) => host === allowed || host.endsWith(`.${allowed}`),
          ),
        ).toBe(true);
      }
    }
  });
});
