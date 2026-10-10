---
name: Journey
themes:
  light:
    background: "#F3F5F9"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#E9EDF4"
    text-primary: "#0F172A"
    text-secondary: "#4B5568"
    text-muted: "#5B6577"
    border: "#DDE3EC"
    border-strong: "#C5CEDB"
    primary: "#1F3470"
    button: "#1F3470"
    on-button: "#FFFFFF"
  dark:
    background: "#0E0F11"
    surface-container-lowest: "#16181B"
    surface-container-low: "#121316"
    text-primary: "#ECEDEF"
    text-secondary: "#A9ACB3"
    text-muted: "#878B93"
    border: "#25282D"
    border-strong: "#34383F"
    primary: "#9FB1E3"
    button: "#ECEDEF"
    on-button: "#0E0F11"
typography:
  family: Geist (variable 400–600, self-hosted in public/fonts/geist-latin.woff2)
  hero-title:
    fontSize: clamp(2.6rem, 1.6rem + 3.6vw, 3.9rem)
    fontWeight: "600"
    letterSpacing: -0.04em
  section-title:
    fontSize: clamp(2rem, 1.55rem + 1.6vw, 2.6rem)
    fontWeight: "600"
    letterSpacing: -0.03em
  body:
    fontSize: 16-17px
    lineHeight: "1.7"
  kicker:
    fontSize: 13px
    fontWeight: "500"
    letterSpacing: 0.1em
    textTransform: uppercase
    color: primary, with a short leading rule
rounded:
  interactive: 12px
  card: 20px
  stage: 24px
---

## Brand & Style

A personal, natural presentation for engineering roles: who Carlos is first, then the journey, then the work and the results. It should feel calm and modern, never like a sales page or a terminal.

## Principles

- **Each fact lives in one section.** The hero is about Carlos (no companies, no numbers). The journey tells the path without metrics. Selected Work holds the projects and their links. Experience holds roles, dates, and the improvements per company. Do not repeat numbers across sections.
- **Improvements sit with the company.** Each role has a "What I improved" panel; numbers inside it are emphasized automatically.
- **Blue is an accent, not a theme.** Navy `#1F3470` (from the shirt in the profile photo) marks the headline phrase, kickers, links, and timeline dots. In dark mode the page is neutral graphite; solid buttons turn off-white instead of blue.
- **Depth without clutter.** Dot grids that fade out, soft glows, hairline borders, and light card shadows. No floating badges, colorful illustrations, or icon sets.

## Themes

- Tokens live in `src/styles/global.css` (`@theme` for light, `[data-theme="dark"]` overrides).
- `BaseHead.astro` sets `data-theme` before first paint from `localStorage.theme` or the system preference. The header button toggles and saves it.
- Use the `--color-button` / `--color-on-button` tokens for solid buttons so dark mode stays neutral.

## Components

- **Hero:** eyebrow (role · location), "Hi, I'm Carlos." plus the headline with the accent phrase, one lead paragraph, two buttons, and a portrait with an offset hairline frame.
- **Journey:** six steps on the left and a sticky stage on the right (pinned under the header on mobile). Scroll drives the stage: a minimal platformer, a desktop ERP, a release pipeline, a dot map of the Americas (DR → Chile remote, DR → Georgia), and an "AI + products + team" orbit. The map dots are `public/images/americas-dots.svg`, generated from Natural Earth land data and colored with a CSS mask.
- **Selected Work:** two-column cards with client · sector, title, summary, stack line, and the project link.
- **Experience:** timeline with dates and location on the left, role and summary on the right, then the "What I improved" panel and a stack line.
- **Contact:** email as the primary button, location row, and outlined LinkedIn/GitHub buttons with icons. No card around it.
- **Motion:** entrance fade on the hero, reveal on scroll, and the scroll-driven journey. `prefers-reduced-motion` disables transitions, the orbit, and the pulses.

## Assets

- Hero portrait: `src/assets/profile-portrait.png` (4:5 crop of `profile.png`).
- Favicon/logo: lowercase "co" monogram, white on a navy rounded square. The logo stays navy in both themes.
- CV PDF: `src/assets/resume.pdf` is printed from `/cv/` using the print stylesheet in `CvContent.astro` (Letter, one page).
- `public/og-image.png` is 1200×630 with the logo, name, tagline, and domain.
