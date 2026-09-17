import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { caseStudySchema, homepageSchema } from "../src/content/schema";

describe("content foundation", () => {
  it("contains every approved case-study source", () => {
    const filenames = readdirSync(resolve("src/content/case-studies")).sort();
    expect(filenames).toEqual([
      "fintech-product.md",
      "logistics-platform.md",
      "saudi-utils.md",
    ]);
  });

  it("keeps internal review notes inside source comments", () => {
    const source = readFileSync(
      resolve("src/content/case-studies/logistics-platform.md"),
      "utf8",
    );
    expect(source).toContain("<!-- INTERNAL REVIEW — DO NOT RENDER");
    expect(source).toContain("-->");
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
});
