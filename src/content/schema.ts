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

export const homepageSchema = z.object({
  kind: z.literal("homepage"),
  eyebrow: z.string().min(1),
  headline: z.string().min(1),
  introduction: z.array(z.string().min(1)).min(1),
  location: z.string().min(1),
  proof: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
      }),
    )
    .min(3),
  about: z.array(z.string().min(1)).min(1),
  selectedWorkIntroduction: z.string().min(1),
  contact: z.array(z.string().min(1)).min(1),
  email: z.email(),
  linkedin: z.url(),
  github: z.url(),
  cv: z.string().regex(/^\/cv\/[a-z0-9._-]+\.pdf$/),
});
