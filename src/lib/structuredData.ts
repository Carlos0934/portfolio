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
		'Ingeniero senior de software especializado en sistemas backend escalables, arquitectura SaaS, integraciones travel-tech, infraestructura cloud y automatización con IA.',
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
		name: 'Sócrates',
		description:
			'Curriculum-grounded exam generation platform for Dominican teachers using official MINERD teaching sequences, document retrieval, OCR, structured extraction, grounded AI generation, and editable DOCX output.',
		creator: { '@id': `${SITE_URL}/#person` },
		url: 'https://socrates.xavely.com',
		keywords: ['Workflow automation', 'Document intelligence', 'Curriculum grounding', 'Teacher productivity'],
	},
	{
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_URL}/#hotel-connectivity-case-study`,
		name: 'Hotel Connectivity & Quote Performance',
		description:
			'Hotel provider integration and quote-performance work improving synchronization, data reliability, and operational efficiency for travel inventory systems.',
		creator: { '@id': `${SITE_URL}/#person` },
		url: 'https://pricetravel.com',
		keywords: ['Provider integration', 'Quote performance', 'Data reliability', 'Operational efficiency'],
	},
	{
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_URL}/#saas-platform-case-study`,
		name: 'Multi-Tenant SaaS Platform APIs',
		description:
			'Backend platform work for multi-tenant SaaS products connecting insurers, service providers, agents, and internal operations.',
		creator: { '@id': `${SITE_URL}/#person` },
		url: 'https://sektor.app/',
		keywords: ['Multi-tenant SaaS', 'Platform APIs', 'Workflow systems', 'Product infrastructure'],
	},
];

export const homeStructuredData = [personJsonLd, websiteJsonLd, profilePageJsonLd, ...caseStudyJsonLd];
export const spanishHomeStructuredData = [personJsonLd, websiteJsonLd, spanishProfilePageJsonLd, ...caseStudyJsonLd];
export const cvStructuredData = [personJsonLd, websiteJsonLd, cvPageJsonLd];
export const spanishCvStructuredData = [personJsonLd, websiteJsonLd, spanishCvPageJsonLd];
