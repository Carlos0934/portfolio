# Carlos Olivo Portfolio

Personal engineering portfolio for `carlos-olivo.dev`, built with Astro and deployed as a static site on Cloudflare Workers.

The site presents senior software engineering work across backend systems, SaaS platforms, travel-tech integrations, AI-assisted workflows, and operational automation.

## Live Site

- Production: <https://carlos-olivo.dev>
- Spanish homepage: <https://carlos-olivo.dev/es/>
- CV: <https://carlos-olivo.dev/cv/>
- Spanish CV: <https://carlos-olivo.dev/es/cv/>

## Features

- English and Spanish homepage routes
- English and Spanish CV pages with downloadable PDF
- Case studies with external proof-of-work links
- SEO metadata, canonical URLs, and hreflang alternates
- JSON-LD structured data for the profile, website, CV, and case studies
- `robots.txt`, sitemap, and `llms.txt` for search and LLM-friendly discovery
- Custom logo and favicon assets
- Cloudflare Workers static asset deployment with Wrangler

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS v4
- MDX/content collections
- Cloudflare Wrangler

## Project Structure

```text
src/
  components/        Shared UI components
  content/           Case studies, experience, contact, and homepage content
  layouts/           Base page layout
  lib/               Navigation and structured data helpers
  pages/             Static routes, including /es and /cv
  sections/          Homepage sections
public/
  fonts/             Local fonts
  favicon.*          Site icons
  llms.txt           LLM discovery file
  robots.txt         Crawler policy
```

## Local Development

```sh
pnpm install
pnpm dev
```

The local dev server runs at <http://localhost:4321>.

## Build

```sh
pnpm build
```

The production output is generated in `dist/`.

## Deploy

```sh
pnpm deploy
```

This runs the Astro build and deploys the static assets using Wrangler. The Cloudflare configuration is in `wrangler.jsonc`.

## SEO And LLM Files

- `public/robots.txt` allows standard search crawlers and common AI/LLM crawlers.
- `public/llms.txt` summarizes the site, routes, capabilities, contact links, and case studies.
- `@astrojs/sitemap` generates the sitemap during `pnpm build`.
- Structured data lives in `src/lib/structuredData.ts`.

## CV Routes

The CV is route-based instead of selector-based:

- `/cv/` renders the English CV.
- `/es/cv/` renders the Spanish CV.
- Both routes include hreflang alternates and a PDF download button.
