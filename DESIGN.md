---
name: Editorial Light
colors:
  background: "#F5F2EC"
  surface-container-lowest: "#FBFAF7"
  surface-container-low: "#EFEBE3"
  surface-container: "rgba(21,23,28,0.05)"
  surface-container-high: "rgba(21,23,28,0.08)"
  on-surface: "#15171C"
  on-surface-variant: "rgba(21,23,28,0.74)"
  text-muted: "rgba(21,23,28,0.60)"
  outline: "rgba(21,23,28,0.20)"
  outline-variant: "rgba(21,23,28,0.10)"
  primary: "#1F3470"
  primary-hover: "#182A5C"
  on-primary: "#FFFFFF"
  primary-container: "rgba(31,52,112,0.10)"
typography:
  display:
    fontFamily: Instrument Serif
    fontSize: clamp(52px, 6vw, 100px)
    fontWeight: "400"
    lineHeight: "0.95"
    letterSpacing: -0.02em
  section-title:
    fontFamily: Instrument Serif
    fontSize: clamp(36px, 2.6vw + 26px, 56px)
    fontWeight: "400"
    lineHeight: "1.05"
  metric:
    fontFamily: Instrument Serif
    fontSize: clamp(48px, 2.4vw + 38px, 68px)
    fontWeight: "400"
    color: "{colors.primary}"
  lead:
    fontFamily: Inter
    fontSize: 20-24px
    fontWeight: "600"
  body:
    fontFamily: Inter
    fontSize: 16-17px
    fontWeight: "400"
    lineHeight: "1.7"
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    letterSpacing: 0.14em
    textTransform: uppercase
rounded:
  md: 6px
  lg: 10px
  container: 12px
  interactive: 9999px
spacing:
  base: 8px
  section-y: 64-96px
---

## Brand & Style

The site should read like a senior engineer's portfolio for hiring managers and business stakeholders: calm, editorial, and outcome-first. Technical depth is still there, but results lead and tooling follows.

## Principles

- **Impact first, said once.** The hero holds the three headline metrics. Case studies lead with client and sector, then a result-stating title, the problem and result, and one muted stack line. Do not repeat a number across sections.
- **No keyword lists on the homepage.** Tech appears only as one muted stack line per case study. The full inventory belongs in the CV.
- **One accent.** Navy blue `#1F3470` (taken from the shirt in the profile photo) is the only accent color. Use it for metrics, primary actions, and links.
- **Warm paper, ink type.** The light background `#F5F2EC` alternates with `#EFEBE3` bands for rhythm. Cards use `#FBFAF7` with a 1px ink-tint border.

## Typography

- **Instrument Serif** for the name, section titles, case titles, and metrics.
- **Inter** for everything else. Use 600 for lead lines, buttons, and small uppercase labels (`.section-label`).
- JetBrains Mono is legacy and should not appear on the homepage.

## Components

- **Buttons:** pill shape. Primary is a navy fill with white text; secondary is a 1px outline that darkens on hover.
- **Case rows:** client/sector column (13rem) plus body column, separated by hairline rules. No tag chips.
- **How I help cards:** a serif title and one outcome sentence.
- **Motion:** gentle entrance and reveal only. No blinking cursors, pulsing dots, or terminal styling.

## Assets

- Hero portrait: `src/assets/profile-portrait.png`, a 4:5 head-and-shoulders crop of `profile.png` with the eyes near the upper third. Its column shares the 3-column grid with the hero metrics.
- Favicon/logo: lowercase "co" monogram, white on a navy rounded square (`public/favicon.svg`, `src/components/LogoMark.astro`).
- `public/og-image.png` is 1200×630. It was rendered from HTML using the site fonts and shows the logo, the name, the tagline, and the domain. It has no metrics.
