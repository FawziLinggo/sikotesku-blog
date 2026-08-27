import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const category = z.enum([
  "psikotes-kerja",
  "kraepelin",
  "matematika-dasar",
  "tiu-cfit",
  "ketelitian",
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
    cta: z.object({
      label: z.string().min(3).max(50),
      href: z.string().url(),
      description: z.string().min(20).max(140),
    }),
  }),
});

export const collections = { blog };
