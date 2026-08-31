import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const category = z.enum([
  "psikotes-kerja",
  "kraepelin",
  "matematika-dasar",
  "tiu-cfit",
  "ketelitian",
  "cpns",
  "karier",
]);

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().min(20).max(90),
    description: z.string().min(70).max(170),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category,
    tags: z.array(z.string()).min(1).max(8),
    author: z.string().default("Tim Sikotesku"),
    readingMinutes: z.number().int().min(2).max(30),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    faq: z.array(z.object({
      question: z.string().min(15).max(160),
      answer: z.string().min(40).max(500),
    })).min(2).max(6).optional(),
    sources: z.array(z.object({
      name: z.string().min(3).max(100),
      url: z.string().url(),
      note: z.string().min(20).max(180).optional(),
    })).min(1).max(4).optional(),
    cta: z.object({
      label: z.string().min(3).max(50),
      href: z.string().url(),
      description: z.string().min(20).max(140),
    }),
  }),
});

export const collections = { blog };
