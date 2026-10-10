# Carlos Olivo — Portfolio Content

> **Role:** Senior Software Engineer
> **Positioning:** Turns concrete problems into simple, effective products. Backend by trade, end to end when needed, AI-assisted.
> **Audience:** Hiring managers, engineering leaders, recruiters
> **Location:** Georgia, United States · Open to remote or hybrid roles
> **Website:** https://carlos-olivo.dev

---

## Site Structure & Navigation

Single-page homepage (English at `/`, Spanish at `/es/`) plus CV pages (`/cv/`, `/es/cv/`). Light and dark themes.

| # | Section | Anchor | What it holds |
|---|---------|--------|---------------|
| 1 | Hero | `#hero` | Who Carlos is. No companies, no numbers. |
| 2 | Journey | `#journey` | The path from a first game to Georgia, and what he is looking for. No metrics. |
| 3 | Selected Work | `#case-studies` | Four projects with their links. |
| 4 | Experience | `#experience` | Roles, dates, and the improvements per company. |
| 5 | Contact | `#contact` | Email, location, LinkedIn, GitHub. |

**Header:** Journey, Work, Experience, Contact, CV button, language switch (EN/ES), theme toggle.

---

## Hero

- **Eyebrow:** Senior Software Engineer · Georgia, US
- **Title:** Hi, I'm Carlos. I turn concrete problems into *simple, effective products.*
- **Lead:** Backend engineer by trade, comfortable across the stack. I like taking a real problem from idea to production, end to end, and using AI to get there faster.
- **Buttons:** Follow my journey (`#journey`), Get in touch (`#contact`)

---

## Journey

1. **Dominican Republic · Age 14 — It started with a game.** Self-taught through a small platformer; the game led to a referral for the first job.
2. **Softone · 2019 — Software a business runs on.** First professional work: a desktop ERP.
3. **ITelle · 2020 — Leading, shipping, operating.** First team lead role: mobile releases to the stores and deployments.
4. **Remote · 2022 — Going remote.** Drimo, then ListoApp (Chile): mobile apps and multi-tenant platforms.
5. **Georgia, United States · 2024 — A new base.** Moved to the US; remote at PriceTravel on hotel connectivity.
6. **Now — What I'm looking for.** A team to connect with, AI-powered ways of building software, end-to-end products. Hobbies: vibe-coding games, generative AI, running, gym. Never stop learning.

---

## Selected Work

| Project | Client · Sector | Link |
|---------|-----------------|------|
| Exam prep in minutes, not hours | Sócrates · EdTech · Dominican Republic | https://socrates.xavely.com |
| Hotel quotes that stay in sync with live inventory | PriceTravel Holding · Travel-tech | https://pricetravel.com |
| One platform for insurers, providers, and agents | Sektor.app & Centuria.app · Multi-tenant SaaS | https://sektor.app/ |
| Live results from 128 sources, in real time | RoulettesView.com · Real-time data | https://roulettesview.com |

---

## Experience

| Company | Role | Dates | Location |
|---------|------|-------|----------|
| PriceTravel Holding | Backend Developer — Hotel Connectivity & Quoting | Jun 2024 – Present | Remote · US |
| ListoApp | Backend Developer — SaaS Platforms & Cloud | Feb 2024 – 2026 | Remote · Chile |
| Drimo | Software Developer | Jul 2022 – Jun 2023 | Remote |
| ITelle | Team Lead | 2020 – 2022 | Santo Domingo, DR |
| Softone | Software Developer | 2019 – 2020 | Santo Domingo, DR |

Each role lists its improvements under "What I improved" (`highlights` in the content file).

---

## Contact

- **Title:** Let's build something together.
- **Description:** Open to backend, platform, and end-to-end product roles, remote or hybrid. If your team is solving a concrete problem, I'd like to hear about it.
- Email: hello@carlos-olivo.dev
- Location: Georgia, United States
- LinkedIn: https://www.linkedin.com/in/carlos-engel-olivo-carmona-a1184917b/
- GitHub: https://github.com/Carlos0934

---

## Site Metadata

| Field | Value |
|-------|-------|
| Site Title | Carlos Olivo |
| Site Description | Software engineer in Georgia, US, who turns concrete problems into simple, effective products: backend by trade, end to end when needed, and AI-assisted. |
| Site URL | https://carlos-olivo.dev |
| Languages | English, Spanish |
| OG Image | `public/og-image.png` (1200×630, logo + name + tagline + domain) |
| LLM summary | `public/llms.txt` |
| Structured data | `src/lib/structuredData.ts` |

---

## Content Architecture

| Section | Content source | Component |
|---------|----------------|-----------|
| Hero | inline copy | `src/sections/Hero.astro` |
| Journey | inline copy (steps array) | `src/sections/Journey.astro` |
| Selected Work | `src/content/case-studies/*.md` (`client`, `sector`, `stack`, `url`) | `src/sections/CaseStudies.astro` |
| Experience | `src/content/experience/*.md` (`highlights`, `stack`, `current`, `url`) | `src/sections/Experience.astro` |
| Contact | `src/content/contact/index.md` | `src/sections/Contact.astro` |

English copy lives in the components and content files. All Spanish home copy lives in `src/lib/i18n.ts`, keyed by the same `data-i18n` keys; `HomeLanguage.astro` uses that dictionary to translate the English page on the client for Spanish browsers.

The CV page (`src/components/CvContent.astro`) keeps its own copy in both languages. After changing it, regenerate `src/assets/resume.pdf` by printing `/cv/` (the print stylesheet produces a one-page Letter PDF).

Design system: see `DESIGN.md`.
