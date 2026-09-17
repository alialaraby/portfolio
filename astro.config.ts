import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alialaraby.com",
  output: "static",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
