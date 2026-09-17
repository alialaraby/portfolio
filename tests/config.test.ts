import { describe, expect, it } from "vitest";

import config from "../astro.config";
import { site } from "../src/config/site";

describe("core configuration", () => {
  it("uses static output", () => {
    expect(config.output).toBe("static");
  });

  it("provides non-empty site metadata", () => {
    expect(site.title).toContain("Senior Backend Engineer");
    expect(site.description.length).toBeGreaterThan(80);
  });
});
