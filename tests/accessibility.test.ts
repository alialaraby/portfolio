import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

import axe, { type RunOptions } from "axe-core";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

const distDir = resolve("dist");

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

// Color contrast needs a real layout engine, which jsdom does not provide, so it
// is verified from the documented token ratios instead. axe runs against the
// document element because that is the supported Node entry point; the two
// page-level rules it leaves "incomplete" at that scope are asserted directly.
const axeOptions: RunOptions = {
  rules: {
    "color-contrast": { enabled: false },
    "color-contrast-enhanced": { enabled: false },
  },
};

const pageLevelIncomplete = new Set([
  "landmark-one-main",
  "page-has-heading-one",
]);

describe.skipIf(!buildExists())("built accessibility", () => {
  const files = buildExists() ? htmlFiles(distDir).sort() : [];

  it("covers every generated page", () => {
    expect(files.length).toBeGreaterThanOrEqual(5);
  });

  it("has no detectable axe violations", async () => {
    for (const file of files) {
      const dom = new JSDOM(readFileSync(file, "utf8"), {
        url: "https://example.com/",
      });

      const results = await axe.run(
        dom.window.document.documentElement,
        axeOptions,
      );

      const violations = results.violations.map(
        (violation) => `${violation.id} (${String(violation.nodes.length)})`,
      );
      expect(violations, file).toEqual([]);

      const unexpectedIncomplete = results.incomplete
        .map((result) => result.id)
        .filter((id) => !pageLevelIncomplete.has(id));
      expect(unexpectedIncomplete, file).toEqual([]);

      dom.window.close();
    }
  });

  it("provides a single main landmark, one h1, and a skip-link target", () => {
    for (const file of files) {
      const dom = new JSDOM(readFileSync(file, "utf8"));
      const document = dom.window.document;

      expect(document.querySelectorAll("main").length, file).toBe(1);
      expect(document.querySelectorAll("h1").length, file).toBe(1);

      const skipLink = document.querySelector("a.skip-link");
      expect(skipLink?.getAttribute("href"), file).toBe("#main-content");
      expect(document.querySelector("#main-content")?.tagName, file).toBe(
        "MAIN",
      );

      dom.window.close();
    }
  });
});
