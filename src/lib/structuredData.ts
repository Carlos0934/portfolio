import { AUTHOR_NAME, GITHUB_URL, LINKEDIN_URL, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../consts';

const sameAs = [LINKEDIN_URL, GITHUB_URL];

export const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${SITE_URL}/#person`,
	name: AUTHOR_NAME,
	url: SITE_URL,
	jobTitle: 'Senior Software Engineer',
	description: SITE_DESCRIPTION,
	email: 'mailto:hello@carlos-olivo.dev',
	address: {
		'@type': 'PostalAddress',
		addressCountry: 'US',
	},
	knowsAbout: [
		'Backend systems',
		'Platform engineering',
		'SaaS architecture',
		'Travel technology integrations',
		'Event-driven systems',
		'Cloud infrastructure',
		'AI workflow automation',
	],
	sameAs,
};

export const websiteJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${SITE_URL}/#website`,
	name: SITE_TITLE,
	url: SITE_URL,
	description: SITE_DESCRIPTION,
	publisher: {
		'@id': `${SITE_URL}/#person`,
	},
	inLanguage: ['en', 'es'],
};

export const profilePageJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	'@id': `${SITE_URL}/#profile`,
	url: `${SITE_URL}/`,
	name: `${SITE_TITLE} - Senior Software Engineer`,
	description: SITE_DESCRIPTION,
	inLanguage: 'en',
	mainEntity: {
		'@id': `${SITE_URL}/#person`,
	},
};

export const spanishProfilePageJsonLd = {
	...profilePageJsonLd,
	'@id': `${SITE_URL}/es/#profile`,
	url: `${SITE_URL}/es/`,
	name: `${SITE_TITLE} - Senior Software Engineer`,
	description:
		'Ingeniero de software senior que construye sistemas backend que ahorran tiempo a los equipos y mantienen rápidos y confiables los flujos que generan ingresos en productos travel-tech, SaaS y educación.',
	inLanguage: 'es',
};

export const cvPageJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	'@id': `${SITE_URL}/cv/#profile`,
	url: `${SITE_URL}/cv/`,
	name: `${SITE_TITLE} CV`,
	description:
		'Carlos Olivo CV: senior software engineer with experience in backend systems, SaaS platforms, travel-tech integrations, cloud infrastructure, and AI automation.',
	inLanguage: 'en',
	mainEntity: {
		'@id': `${SITE_URL}/#person`,
	},
};

export const spanishCvPageJsonLd = {
	...cvPageJsonLd,
	'@id': `${SITE_URL}/es/cv/#profile`,
	url: `${SITE_URL}/es/cv/`,
	description:
		'CV de Carlos Olivo en español: ingeniero senior de software con experiencia en backend, SaaS, integraciones travel-tech, cloud y automatización con IA.',
	inLanguage: 'es',
	mainEntity: {
		'@id': `${SITE_URL}/#person`,
	},
};

export const caseStudyJsonLd = [
	{
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_URL}/#socrates-case-study`,
		name: 'Sócrates: exam prep in minutes, not hours',
		description:
			'Curriculum-grounded exam generation for Dominican teachers. Cuts exam preparation by about 75%, from 40–90 minutes to 10–15 minutes, producing editable DOCX exams grounded in official MINERD teaching sequences.',
		creator: { '@id': `${SITE_URL}/#person` },
		url: 'https://socrates.xavely.com',
		keywords: ['Workflow automation', 'Document intelligence', 'Curriculum grounding', 'Teacher productivity'],
	},
	{
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_URL}/#hotel-connectivity-case-study`,
		name: 'Hotel quotes that stay in sync with live inventory',
		description:
			'Built and hardened 9 hotel provider integrations and cached exchange rates and promotions, keeping quotes in sync with live inventory while reducing database load.',
		creator: { '@id': `${SITE_URL}/#person` },
		url: 'https://pricetravel.com',
		keywords: ['Provider integration', 'Quote performance', 'Data reliability', 'Operational efficiency'],
	},
	{
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_URL}/#saas-platform-case-study`,
		name: 'One platform for insurers, providers, and agents',
		description:
			'Backends for two multi-tenant SaaS products, Sektor.app and Centuria.app, with event-driven notifications that keep insurers, service providers, and agents in the loop.',
		creator: { '@id': `${SITE_URL}/#person` },
		url: 'https://sektor.app/',
		keywords: ['Multi-tenant SaaS', 'Platform APIs', 'Workflow systems', 'Product infrastructure'],
	},
];

export const homeStructuredData = [personJsonLd, websiteJsonLd, profilePageJsonLd, ...caseStudyJsonLd];
export const spanishHomeStructuredData = [personJsonLd, websiteJsonLd, spanishProfilePageJsonLd, ...caseStudyJsonLd];
export const cvStructuredData = [personJsonLd, websiteJsonLd, cvPageJsonLd];
export const spanishCvStructuredData = [personJsonLd, websiteJsonLd, spanishCvPageJsonLd];
