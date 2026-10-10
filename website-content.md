# Carlos Olivo — Portfolio Content

> **Role:** Senior Software Engineer
> **Focus:** Backend systems that save teams time and keep revenue-critical flows fast and reliable
> **Audience:** Hiring managers, engineering leaders, recruiters
> **Location:** US & Dominican Republic · Open to remote or hybrid roles
> **Website:** https://carlos-olivo.dev

---

## Table of Contents

1. [Site Structure & Navigation](#site-structure--navigation)
2. [Hero](#hero)
3. [Selected Work](#selected-work)
4. [Experience](#experience)
5. [How I Help](#how-i-help)
6. [Contact](#contact)
7. [Site Metadata](#site-metadata)
8. [Content Architecture](#content-architecture)

---

## Site Structure & Navigation

Each fact appears in one place: headline numbers in the hero, details in Selected Work, and role scope in Experience.

Single-page homepage (English at `/`, Spanish at `/es/`) plus CV pages (`/cv/`, `/es/cv/`).

| # | Section | Anchor |
|---|---------|--------|
| 1 | Hero | `#hero` |
| 2 | Selected Work | `#case-studies` |
| 3 | Experience | `#experience` |
| 4 | How I Help | `#technical-focus` |
| 5 | Contact | `#contact` |

**Header actions:** email with copy button, CV button, LinkedIn, GitHub.

---

## Hero

**Eyebrow:** Senior Software Engineer · Open to remote or hybrid roles

**Name:** Carlos Olivo

**Tagline:** I build backend systems that save teams time and keep revenue-critical flows fast and reliable.

**Description:** Senior software engineer across travel-tech, SaaS, and education products. I work close to the business problem: connecting the systems a team depends on, removing manual work, and making the flows that drive revenue faster and steadier.

**CTAs:** See selected work (`#case-studies`) · View CV (`/cv/`)

**Headline metrics:**

| Value | Label | Source |
|-------|-------|--------|
| −75% | Less exam prep time for teachers using Sócrates | 40 → 10 min |
| 9 | Hotel provider integrations built or hardened | 5 built + 4 optimized at PriceTravel |
| −50% | Serverless cold-start time | Lambda pre-deployment bundling at ListoApp |

---

## Selected Work

**Section title:** Real problems, measurable results.

Each case uses this format: client + sector (left column) → title stating the result → problem and outcome → one muted stack line → project link. The headline numbers live only in the hero, so they are not repeated here.

### 1. Exam prep in minutes, not hours
- **Client:** Sócrates · EdTech · Dominican Republic
- **Summary:** Dominican teachers spent 40–90 minutes turning official MINERD curriculum into a usable exam. Sócrates generates an editable, curriculum-grounded DOCX exam in 10–15 minutes.
- **Stack:** Document AI · OCR · Structured extraction · DOCX generation
- **URL:** https://socrates.xavely.com

### 2. Hotel quotes that stay in sync with live inventory
- **Client:** PriceTravel Holding · Travel-tech
- **Summary:** Quoting depended on many hotel providers with different behaviors and latency. I built and hardened the provider connections and cached exchange rates and promotions, so the quoting engine gets fresh rates and availability while hitting the database less.
- **Stack:** AWS DAX · Background workers · Hotel provider APIs
- **URL:** https://pricetravel.com

### 3. One platform for insurers, providers, and agents
- **Client:** Sektor.app & Centuria.app · Multi-tenant SaaS
- **Summary:** Two growing SaaS products needed to serve several user roles on shared infrastructure. I built the backends behind Sektor.app and Centuria.app, with event-driven notifications that keep every party in the loop as work moves forward.
- **Stack:** TypeScript · NestJS · GraphQL · MongoDB · AWS SNS/EventBridge
- **URL:** https://sektor.app/

### 4. Live results from 128 sources, in real time
- **Client:** RoulettesView.com · Real-time data
- **Summary:** A live-data product needed fast-changing results from 128 tables delivered to users instantly and without duplicates. I built a concurrent collection pipeline and a real-time API that streams one clean event per change.
- **Stack:** Go · WebSockets · Chrome-based scraping

---

## Experience

### PriceTravel Holding — Backend Developer, Hotel Connectivity & Quoting
Jun 2024 – Present · Remote (US)

Own hotel provider connectivity and the data paths behind the quoting engine, working with the quoting team on accuracy and response time.

### ListoApp (Chile) — Backend Developer, SaaS Platforms & Cloud
Feb 2024 – Present · Remote (US)

Backend and cloud delivery for the company's SaaS products and client platforms, from API design to serverless performance and CI/CD.

### Drimo — Software Developer
Jul 2022 – Jun 2023 · Remote

Moved the company website and blog to a faster, SEO-friendly stack through an automated migration, and kept serverless APIs reliable and cost-efficient while shipping web and mobile features.

---

## How I Help

**Section title:** Technology in service of the outcome.

| Area | Outcome |
|------|---------|
| Connect the systems a business runs on | Products, providers, and partners share data reliably, without manual re-entry or out-of-sync records. |
| Make critical flows fast and reliable | The flows that drive revenue respond faster, fail less, and ship through automated deployments. |
| Turn repetitive work into minutes | Automation and AI that remove manual steps, while people stay in charge of the decisions that matter. |

The homepage has no technology list; the full inventory lives on the CV.

---

## Contact

**Title:** Let's build something that ships.

**Description:** US-based, working with teams and products across the Dominican Republic. Open to backend, platform, and integration-heavy roles — remote or hybrid. If you need an engineer who improves systems and delivers reliably, let's talk.

- Email: hello@carlos-olivo.dev
- LinkedIn: https://www.linkedin.com/in/carlos-engel-olivo-carmona-a1184917b/
- GitHub: https://github.com/Carlos0934

---

## Site Metadata

| Field | Value |
|-------|-------|
| Site Title | Carlos Olivo |
| Site Description | Senior Software Engineer building backend systems that save teams time and keep revenue-critical flows fast and reliable across SaaS, travel-tech, and education products. |
| Site URL | https://carlos-olivo.dev |
| Languages | English, Spanish |
| OG Image | `public/og-image.png` (1200×630, logo + name + tagline + domain) |
| LLM summary | `public/llms.txt` |
| Structured data | `src/lib/structuredData.ts` |

---

## Content Architecture

| Section | Content source | Component |
|---------|----------------|-----------|
| Hero | `src/content/hero/index.md` | `src/sections/Hero.astro` |
| Selected Work | `src/content/case-studies/*.md` (`client`, `sector`, `stack`) | `src/sections/CaseStudies.astro` |
| Experience | `src/content/experience/*.md` | `src/sections/Experience.astro` |
| How I Help | `src/content/technical-focus/*.md` | `src/sections/TechnicalFocus.astro` |
| Contact | `src/content/contact/index.md` | `src/sections/Contact.astro` |

Spanish copy is stored in each section component and also in `src/components/HomeLanguage.astro`. When English copy changes, update both Spanish locations.

Design system: see `DESIGN.md` (Editorial Light: warm paper, Instrument Serif + Inter, single navy accent).
