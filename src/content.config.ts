import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	blog: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			author: z.literal('Frédéric Galliné'),
			category: z.string(),
			tags: z.array(z.string()).default([]),
			lang: z.enum(['en', 'fr']),
			draft: z.boolean().default(false),
		}),
	}),
};
