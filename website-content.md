# Carlos Olivo — Portfolio Content

> **Role:** Senior Software Engineer  
> **Focus:** Backend systems, APIs, infrastructure, and reliability across SaaS and travel-tech products  
> **Location:** US & Dominican Republic · Open to Remote or Hybrid  
> **Website:** https://carlosgb.dev  

---

## Table of Contents

1. [Site Structure & Navigation](#site-structure--navigation)
2. [Overview / Hero](#overview--hero)
3. [What I Deliver (Value Strip)](#what-i-deliver-value-strip)
4. [Case Studies](#case-studies)
5. [Selected Impact](#selected-impact)
6. [Experience](#experience)
7. [Technical Focus](#technical-focus)
8. [Contact](#contact)
9. [Footer](#footer)
10. [Site Metadata](#site-metadata)

---

## Site Structure & Navigation

The portfolio is a single-page application with the following sections:

| # | Section | Anchor |
|---|---------|--------|
| 1 | Hero | `#hero` |
| 2 | Deliverables | `#value-strip` |
| 3 | Case Studies | `#case-studies` |
| 4 | Experience | `#experience` |
| 5 | Technical Focus | `#technical-focus` |
| 6 | Contact | `#contact` |

**Header Actions:**
- Email: hello@carlos-olivo.dev (with copy button)
- CV Download: `/Carlos-Olivo-CV.pdf`
- External Links: LinkedIn, GitHub

---

## Overview / Hero

**Name:** Carlos Olivo  
**Availability Status:** US & Dominican Republic · Open to Remote or Hybrid  

**Tagline:** I build backend systems for products that need to scale, integrate, and keep working.

**Description:** Most of my recent work has focused on APIs, infrastructure, and reliability across SaaS and travel-tech products. I work close to the product where architecture, integrations, and operational clarity matter, helping teams ship with confidence while keeping systems maintainable as they grow.

**Proof Signals:**
| Label | Value |
|-------|-------|
| Platform work | SaaS |
| Integration-heavy | Travel-tech |
| Delivery focus | Reliability |

---

## What I Deliver (Value Strip)

**Section Label:** What I deliver

Four core capability areas:

### 1. Product Infrastructure
Backend foundations for multi-tenant products, operational workflows, and high-volume user activity.

### 2. Workflow Automation
Systems that remove manual steps, connect services, and keep business processes moving reliably.

### 3. External Integrations
Provider and platform connections that normalize data, handle edge cases, and support dependable operations.

### 4. Reliability Improvements
Performance, deployment, and monitoring work that reduces toil and keeps production systems stable.

---

## Case Studies

**Section Label:** Proof of work  
**Section Title:** Selected Case Studies  
**Section Description:** Backend and platform projects where integration reliability, event-driven architecture, and operational efficiency were the primary objectives.

---

### 1. Sócrates

**Summary:** Built a curriculum-grounded exam platform for Dominican teachers that turns official MINERD sequences into editable DOCX exams, cutting preparation from 40 minutes to 10 minutes and from 90 minutes to 15 minutes for lower digital-skill users.

**Tags:** Workflow Automation, Document Intelligence, Curriculum Grounding, Teacher Productivity

**Link:** https://socrates.xavely.com

**Context:** Dominican teachers spend significant time turning official MINERD teaching sequences into usable exams. The work is split between identifying the right curriculum content and formatting a clean document in Word, which is especially demanding for teachers with lower digital confidence.

**Implementation:** Built Sócrates as a curriculum-grounded exam generation platform where teachers can register, select current MINERD teaching sequences, define exam sections and question types, and generate assessments grounded in the official source material. The platform uses document retrieval, OCR, AI extraction, and structured data extraction to identify evaluation criteria, content, and curriculum elements before producing an editable DOCX exam.

**Results:**
- Reduced exam preparation from about 40 minutes to 10 minutes for teachers with strong Word skills
- Reduced exam preparation from about 90 minutes to 15 minutes for teachers with lower digital-skill levels after learning the software
- Produced editable, print-ready DOCX exams grounded in official MINERD teaching sequences

---

### 2. Hotel Connectivity & Quote Performance

**Summary:** Built hotel provider integrations and DAX-backed data paths that improved synchronization, quote responsiveness, and API consistency across travel inventory systems.

**Tags:** Provider Integration, Quote Performance, Data Reliability, Operational Efficiency

**Link:** https://pricetravel.com

**Context:** Travel quoting and connectivity flows depended on multiple third-party providers with different behaviors, latency profiles, and data constraints.

**Implementation:** Implemented provider integrations for SiteMinder (SiteConnect), TravelClick, Omnibees, Gin RateFox, and TravelGate HotelX, while also supporting Hotelbeds, DerbySoft, SynXis, and Expedia Rapid API. Added a DAX-backed exchange-rate materialized view and a promotions materialized view powered by background workers to reduce quote-time data access overhead.

**Results:**
- Real-time rate and availability synchronization across multiple hotel providers
- Lower quote-service query load through cached exchange-rate and promotions paths
- Improved API consistency and operational reliability for provider integrations

---

### 3. Multi-Tenant SaaS Platform APIs

**Summary:** Built GraphQL and REST backends for multi-tenant SaaS products connecting insurers, service providers, agents, and internal operations.

**Tags:** Multi-Tenant SaaS, Platform APIs, Workflow Systems, Product Infrastructure

**Link:** https://sektor.app/

**Context:** Growing SaaS products needed backend services that could support multiple user roles, shared infrastructure, and integrations with storage and notification systems.

**Implementation:** Built GraphQL APIs with NestJS and TypeScript for Sektor.app, integrating S3 and multi-tenant data models to connect insurance companies, providers, and agents. Developed the backend API for Centuria.app with graph-based relationships, activities, and task management on MongoDB, and supported event-driven notifications with AWS SNS and EventBridge.

**Results:**
- Multi-role SaaS capabilities delivered on shared backend foundations
- Event-driven integrations improved scalability for notifications and workflow events
- Backend services aligned product requirements with maintainable domain boundaries

---

### 4. Real-Time Streaming API

**Summary:** Created a Go-based real-time API and Chrome-powered scraper that tracked 128 roulette tables and emitted deduplicated live results over WebSockets.

**Tags:** Real-Time Data, Event Streaming, Data Normalization, Live Monitoring

**Link:** Not public yet

**Context:** The product required a live-data backend capable of collecting fast-changing table results and pushing clean updates to connected clients without duplicates.

**Implementation:** Built a real-time API in Go backed by goroutine-based workers and a Chrome-driven scraper that monitored 128 roulette tables. Added normalization and deduplication logic before broadcasting updates via WebSockets so consumers could react to a clean event stream.

**Results:**
- Continuous live tracking across 128 active tables
- Deduplicated event delivery for downstream consumers
- Low-latency real-time updates over persistent WebSocket connections

---

## Selected Impact

**Section Title:** Selected Impact

Three key metrics with detailed explanations:

### 1. Lambda Cold Starts
**Metric:** -50%

Reduced AWS Lambda cold start duration by 50% with a pre-deployment bundling flow and leaner packages.

Introduced a bundling process before deployment that trimmed package size and startup work, improving responsiveness for serverless workloads without changing product behavior.

---

### 2. Live Data Streaming
**Metric:** 128

Tracked 128 roulette tables in real time with a Go API, Chrome-based scraping, and deduplicated WebSocket events.

Built a concurrency-driven pipeline using Go and goroutines to capture, normalize, and broadcast live results with low-latency fan-out for downstream consumers.

---

### 3. Provider & Quote Reliability
**Metric:** Real-time

Implemented hotel provider integrations, DAX-backed views, and quote-flow improvements for faster, more reliable travel inventory responses.

Delivered connectivity across multiple hotel providers and optimized exchange-rate and promotions retrieval so quoting services could respond with less database pressure and better consistency.

---

## Experience

**Section Label:** Career path  
**Section Title:** Experience

---

### 1. PriceTravel Holding
**Role:** Backend Developer — Hotel Connectivity & Quoting Systems  
**Period:** Jun 2024 – Present  
**Location:** Remote (US)  
**Order:** 1

Built and maintained hotel provider integrations with SiteMinder, TravelClick, Omnibees, Gin RateFox, and TravelGate HotelX, enabling real-time rate and availability sync. Optimized existing Hotelbeds, DerbySoft, SynXis, and Expedia Rapid API connections for reliability. Developed DAX-backed materialized views for exchange rates and promotions, cutting quote query load and reducing currency retrieval latency.

**Key Technologies:** .NET, DAX, Travel APIs, Background Workers, AWS

---

### 2. ListoApp (Chile)
**Role:** Backend Developer — SaaS Platforms & Cloud Infrastructure  
**Period:** Feb 2024 – Present  
**Location:** Remote (US)  
**Order:** 2

Reduced AWS Lambda cold start by 50% through pre-deployment bundling. Built event-driven notification systems with SNS and EventBridge. Delivered GraphQL APIs for multi-tenant SaaS platforms Sektor.app and Centuria.app using NestJS, TypeScript, and MongoDB. Created a real-time Go API for RoulettesView.com tracking 128 roulette tables via WebSockets. Automated deployments with GitHub Actions CI/CD.

**Key Technologies:** NestJS, GraphQL, MongoDB, AWS Lambda, SNS, EventBridge, Go, WebSockets, GitHub Actions

---

### 3. Drimo
**Role:** Software Developer  
**Period:** Jul 2022 – Jun 2023  
**Location:** Remote  
**Order:** 3

Built cross-platform web and mobile applications with React. Maintained and optimized serverless APIs on AWS for reliability and cost efficiency. Developed features for a NestJS and GraphQL microservices ecosystem. Migrated the company's blog and website to Next.js via automated web scraping, improving load speed and SEO.

**Key Technologies:** React, React Native, NestJS, GraphQL, AWS, Next.js

---

## Technical Focus

**Section Label:** Capability areas  
**Section Title:** Technical Focus  
**Section Description:** Backend engineering, platform delivery, and integration work — organized by capability area.

Three technical dossiers with detailed metadata:

---

### Dossier 01: Cloud Infrastructure

**Eyebrow:** Cloud Delivery  
**Title:** Cloud Infrastructure  
**Summary:** Building and operating AWS-backed SaaS platforms with automation, performance tuning, and delivery discipline.

**Primary Signal:** AWS-based backends tuned for deployment speed, reliability, and lower-latency workloads.

**Tags:** AWS, Serverless, GitHub Actions

**Details:**
- **Cloud & infrastructure:** AWS (Lambda, SNS, EventBridge, DAX, S3), Docker, GitHub Actions
- **Platform optimization:** Reduced Lambda cold starts, automated deployments, and background workers for production workloads

---

### Dossier 02: Full-Stack Delivery

**Eyebrow:** Full-Stack Systems  
**Title:** Full-Stack Delivery  
**Summary:** Shipping product and platform systems across backend, frontend, and service layers with a strong emphasis on maintainability.

**Primary Signal:** Product and platform work across JavaScript/TypeScript, .NET, and Go with maintainable service boundaries.

**Tags:** TypeScript, .NET 8, Go

**Details:**
- **Languages & runtime:** TypeScript, JavaScript, C#, Go, SQL, Node.js
- **Frameworks & services:** NestJS, React, Next.js, .NET 8, GraphQL, Serverless Framework

---

### Dossier 03: Connectivity & APIs

**Eyebrow:** Provider Connectivity  
**Title:** Connectivity & APIs  
**Summary:** Designing integration-heavy systems that connect travel providers, quoting engines, and multi-tenant SaaS products.

**Primary Signal:** Integration layers built for hotel providers, quoting flows, and event-driven service coordination.

**Tags:** Travel Tech, GraphQL, Event-Driven

**Details:**
- **Provider integrations:** SiteMinder, TravelClick, Omnibees, Gin RateFox, TravelGate HotelX, and other travel APIs
- **Data & caching:** PostgreSQL, MongoDB, Redis, DAX, DynamoDB

---

## Contact

**Section Label:** Next step  
**CTA Headline:** Let's build something that ships.

**CTA Description:** US-based, working with teams and products across the Dominican Republic. Open to backend, platform, and integration-heavy roles — remote or hybrid. If you need an engineer who improves systems and delivers reliably, let's talk.

**Direct Contact:**
- **Email:** hello@carlos-olivo.dev
- **Location:** United States · Dominican Republic

**Profiles:**
- **LinkedIn:** https://www.linkedin.com/in/carlos-engel-olivo-carmona-a1184917b/
- **GitHub:** https://github.com/Carlos0934

**Availability Context:** Based in the US and working closely with teams and products across the Dominican Republic. Open to remote or hybrid roles where I can help build scalable APIs, platform services, and integration-heavy systems. If you're working on SaaS platforms, cloud infrastructure, or travel-tech connectivity, feel free to reach out.

---

## Footer

**Copyright:** © 2025 Carlos Olivo. All rights reserved.

**Social Links:**
- GitHub: https://github.com/Carlos0934
- LinkedIn: https://www.linkedin.com/in/carlos-engel-olivo-carmona-a1184917b/

---

## Site Metadata

| Field | Value |
|-------|-------|
| Site Title | Carlos Olivo |
| Site Description | Senior Software Engineer building scalable APIs, event-driven platforms, and SaaS backends for travel-tech, multi-tenant, and integration-heavy systems. |
| Site URL | https://carlosgb.dev |
| Author | Carlos Olivo |
| Language | English |
| Generator | Astro |

**SEO/Open Graph:**
- OG Type: website
- OG Site Name: Carlos Olivo
- Twitter Card: summary_large_image

**Fonts Used:**
- Inter (Regular, Bold)
- JetBrains Mono (Regular)

**Tech Stack:**
- Framework: Astro v6.1.8
- Styling: Tailwind CSS v4.2.2
- Content: Markdown with Astro Content Collections
- Build Output: Static Site Generation (SSG)

---

## Content Architecture

### Content Collections (Astro)

The portfolio uses Astro Content Collections with the following schemas:

1. **hero** — Profile introduction, tagline, proof signals
2. **experience** — Work history with roles, companies, dates, descriptions
3. **caseStudies** — Detailed project case studies with tags
4. **selectedImpact** — Key metrics and achievements
5. **technicalFocus** — Technical capability areas with categories
6. **contact** — Contact information and social links

### Section Components

| Component | Source | Content Type |
|-----------|--------|--------------|
| Hero | `hero/index.md` + Hero.astro | Markdown + Layout |
| ValueStrip | Hardcoded in ValueStrip.astro | Static |
| CaseStudies | `case-studies/*.md` + CaseStudies.astro | Markdown collection |
| SelectedImpact | `selected-impact/*.md` + SelectedImpact.astro | Markdown collection |
| Experience | `experience/*.md` + Experience.astro | Markdown collection |
| TechnicalFocus | `technical-focus/*.md` + TechnicalFocus.astro | Markdown collection + Hardcoded meta |
| Contact | `contact/index.md` + Contact.astro | Markdown + Layout |
| Header | Header.astro | Hardcoded |
| Footer | Footer.astro | Hardcoded |

### Design System Tokens (Inferred)

**Color Palette:**
- Background: `#101214` (dark)
- Surface: `#1c1f25`
- Surface Elevated: `#242830`
- Text Primary: `#e8eaed`
- Text Secondary: `#9aa3b2`
- Text Muted: `#6b7280`
- Primary/Signal: `#365c8d` (blue)
- Border: `#2a3140`

**Typography:**
- Font Family: Inter (sans-serif), JetBrains Mono (monospace)
- Scale: Hero title 2.8-3rem, Section titles 2-3rem, Body 0.95-1rem

**Animations:**
- Scroll-triggered reveals (IntersectionObserver)
- Staggered entrance effects
- 3D perspective transforms on Technical Focus cards
- Reduced motion support via `prefers-reduced-motion`
