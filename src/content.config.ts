import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import {
  caseStudySchema,
  experienceSchema,
  homepageSchema,
} from "./content/schema";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.union([
    homepageSchema,
    experienceSchema,
    z.object({
      kind: z.enum(["capabilities", "open-source", "page-metadata"]),
    }),
  ]),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: caseStudySchema,
});

export const collections = { pages, caseStudies };
