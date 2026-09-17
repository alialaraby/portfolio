import { describe, expect, it } from "vitest";

import config from "../astro.config";
import { site } from "../src/config/site";

describe("core configuration", () => {
  it("uses static output", () => {
    expect(config.output).toBe("static");
  });

  it("targets the GitHub Pages project path", () => {
    expect(config.site?.toString()).toBe("https://alialaraby.github.io");
    expect(config.base).toBe("/portfolio");
    expect(site.url).toBe("https://alialaraby.github.io/portfolio/");
  });

  it("provides non-empty site metadata", () => {
    expect(site.title).toContain("Senior Backend Engineer");
    expect(site.description.length).toBeGreaterThan(80);
  });
});
