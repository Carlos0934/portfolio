import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Experience Section — Role history with company and dates
 */
const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
	schema: z.object({
		role: z.string(),
		company: z.string(),
		dateRange: z.string(),
		order: z.number(),
		location: z.string().optional(),
		current: z.boolean().optional(),
		url: z.url().optional(),
		stack: z.string().optional(),
		highlights: z.array(z.string()).optional(),
	}),
});

/**
 * Case Studies — Project summaries
 */
const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		summary: z.string(),
		tags: z.array(z.string()).optional(),
		client: z.string().optional(),
		sector: z.string().optional(),
		stack: z.string().optional(),
		order: z.number().optional(),
		url: z.url().optional(),
	}),
});

/**
 * Contact — LinkedIn and GitHub connection
 */
const contact = defineCollection({
	loader: glob({ base: './src/content/contact', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().default('Contact'),
		location: z.string().optional(),
		linkedinUrl: z.url(),
		linkedinHandle: z.string().optional(),
		githubUrl: z.url().optional(),
		githubHandle: z.string().optional(),
		email: z.email().optional(),
	}),
});

export const collections = {
	experience,
	caseStudies,
	contact,
};
