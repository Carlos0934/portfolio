import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Hero Section — Primary headline and introduction
 */
const hero = defineCollection({
	loader: glob({ base: './src/content/hero', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		tagline: z.string().optional(),
		description: z.string().optional(),
		eyebrow: z.string().optional(),
		proofSignals: z.array(z.object({
			label: z.string(),
			value: z.string().optional(),
		})).optional(),
		resumeUrl: z.string().optional(),
	}),
});

/**
 * Experience Section — Role history with company and dates
 */
const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		role: z.string(),
		company: z.string(),
		dateRange: z.string(),
		order: z.number(),
		location: z.string().optional(),
	}),
});

/**
 * Selected Impact — Metrics and results
 */
const selectedImpact = defineCollection({
	loader: glob({ base: './src/content/selected-impact', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		metric: z.string(),
		description: z.string().optional(),
		order: z.number(),
		icon: z.string().optional(),
	}),
});

/**
 * Case Studies — Project summaries
 */
const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		summary: z.string(),
		tags: z.array(z.string()).optional(),
		order: z.number().optional(),
		url: z.string().url().optional(),
	}),
});

/**
 * Technical Focus — Skills and tools (tabbed interface)
 */
const technicalFocus = defineCollection({
	loader: glob({ base: './src/content/technical-focus', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		category: z.enum(['cloud-infrastructure', 'ai-automation', 'system-integrations']),
	}),
});

/**
 * Contact — LinkedIn and GitHub connection
 */
const contact = defineCollection({
	loader: glob({ base: './src/content/contact', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string().default('Contact'),
		location: z.string().optional(),
		linkedinUrl: z.string().url(),
		linkedinHandle: z.string().optional(),
		githubUrl: z.string().url().optional(),
		githubHandle: z.string().optional(),
		email: z.string().email().optional(),
	}),
});

export const collections = {
	hero,
	experience,
	selectedImpact,
	caseStudies,
	technicalFocus,
	contact,
};
