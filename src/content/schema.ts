import { z } from "astro/zod";

export const caseStudySchema = z.object({
  title: z.string().min(1),
  description: z.string().min(50),
  classification: z.enum(["professional-system", "open-source"]),
  route: z.string().regex(/^\/work\/[a-z0-9-]+$/),
  order: z.number().int().positive(),
  repository: z.url().optional(),
  package: z.url().optional(),
});
