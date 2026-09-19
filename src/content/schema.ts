import { z } from "astro/zod";

export const caseStudySchema = z.object({
  title: z.string().min(1),
  description: z.string().min(50),
  classification: z.enum(["professional-system", "open-source"]),
  route: z.string().regex(/^\/work\/[a-z0-9-]+$/),
  order: z.number().int().positive(),
  project: z.string().min(1),
  cardContext: z.string().min(1),
  cardProblem: z.string().min(1),
  highlightLabel: z.string().min(1).optional(),
  headerTitle: z.string().min(1).optional(),
  caseContext: z.string().min(1).optional(),
  caseLocation: z.string().min(1).optional(),
  highlights: z.array(z.string().min(1)).min(2).max(3),
  technologies: z.array(z.string().min(1)).min(1),
  role: z.string().min(1),
  timeline: z.string().min(1).optional(),
  diagram: z.object({
    label: z.string().min(1),
    steps: z
      .array(
        z.object({
          label: z.string().min(1),
          detail: z.string().min(1).optional(),
        }),
      )
      .min(3),
  }),
  repository: z.url().optional(),
  package: z.url().optional(),
  internalReview: z.string().min(1),
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
        emphasis: z.string().min(1).optional(),
        label: z.string().min(1),
      }),
    )
    .min(3),
  selectedWorkIntroduction: z.string().min(1),
  contact: z.array(z.string().min(1)).min(1),
  email: z.email(),
  linkedin: z.url(),
  github: z.url(),
  cv: z.string().regex(/^\/cv\/[a-z0-9._-]+\.pdf$/),
});

export const experienceSchema = z.object({
  kind: z.literal("experience"),
  introduction: z.string().min(1),
  roles: z
    .array(
      z.object({
        company: z.string().min(1),
        positions: z
          .array(
            z.object({
              title: z.string().min(1),
              timeline: z.string().min(1),
            }),
          )
          .min(1),
        summary: z.string().min(1),
        highlights: z.array(z.string().min(1)).min(1),
        note: z.string().min(1).optional(),
      }),
    )
    .min(1),
});
