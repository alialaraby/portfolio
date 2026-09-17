import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alialaraby.github.io",
  base: "/portfolio",
  output: "static",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
