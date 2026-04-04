# Operator Core — design system reference

## Purpose

Operator Core is the visual system for a personal software engineering brand focused on:

- backend systems
- operational platforms
- data and decision support
- AI-enabled workflow automation

The interface should communicate a single reading:

**engineer who improves real systems, reduces operational friction, and designs useful software for execution**

It should not look like:

- a creative portfolio
- a flashy startup site
- a decorative UI kit
- a gaming aesthetic
- an AI-hype aesthetic

## Principles

1. **Systems first** — every element should feel like part of a real product system.
2. **Signal over decoration** — color communicates state, priority, or action.
3. **Strong typography, quiet surfaces** — hierarchy comes from type first.
4. **Business-aware clarity** — optimize for recruiters, founders, hiring managers, and engineering leads.
5. **Dark-first discipline** — dark mode means contrast and control, not glow.

## Base Tokens

### Core colors

- Canvas: `#101214`
- Surface: `#1A1E26`
- Surface Alt: `#1C1F25`
- Surface Elevated: `#202634`
- Stroke: `#2A3140`
- Stroke Strong: `#384256`
- Text Primary: `#E5E7EB`
- Text Secondary: `#A1A8B9`
- Text Muted: `#7E8798`
- Accent Primary: `#365C8D`
- Accent Primary Hover: `#426A9E`
- Accent Primary Active: `#2C4D78`
- Accent Signal: `#20899F`

### Semantic states

- Success: `#2F8F72`
- Warning: `#B98733`
- Danger: `#B25461`
- Info: `#4C83C3`

### Typography

- Sans: `Inter`
- Mono: `JetBrains Mono`

### Radius

- Small: `8px`
- Medium: `12px`
- Large: `16px`

### Spacing

Base scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`

## Visual Hierarchy

- **Headings** carry the strongest visual weight.
- **Supporting copy** stays readable but clearly subordinate.
- **Metadata** uses mono or smaller sizes for labels, stack items, timestamps, and architecture notes.

## Component Rules

### Buttons

- Allow only **one primary action per block**.
- Variants: `primary`, `secondary`, `ghost`, `danger`.
- No dual-primary groups.
- No decorative glow.

### Inputs

- States: default, hover, focus, invalid, disabled.
- Visible but restrained borders.
- Focus ring only on interaction.
- Low-contrast placeholder.
- Error states should be noticeable without oversaturation.

### Badges

- Badges indicate **status** or **category**, not marketing emphasis.
- Status badges may include subtle semantic color and a small dot.
- Tag badges should stay neutral and compact.
- Avoid saturated fills, dashed borders, large pills, or heavy shadows.

### Cards

- Functional, not decorative.
- Stable surface, thin border, clean padding, clear type hierarchy.
- Recommended patterns: feature card, case study card, metric card, system card.

### Tables

- Should feel like operational or backend-facing views.
- Small uppercase headers.
- Subtle hover.
- Technical columns may use mono.
- Avoid aggressive zebra stripes or heavy borders.

### Tabs / Pagination / Navigation

- Tabs should be quiet, with soft active state emphasis.
- Pagination should feel structural, not prominent.
- Header should be sticky with subtle blur, thin border, and controlled translucency.
- Mobile navigation must preserve the same visual language.

## Color Usage

Use an **80 / 20** balance:

- 80% neutrals
- 20% signal / accent

### Accent Primary

Use for:

- primary CTA
- key links
- current states
- selected tabs
- current page

### Accent Signal

Use more sparingly for:

- indicators
- system cues
- supporting emphasis

Never saturate a whole screen with accent color.

## Layout

- Desktop-first for hiring conversion, while staying responsive.
- Keep consistent rhythm between hero, impact, case studies, experience, technical focus, opportunities, and contact.
- Use clear grids, generous whitespace, and aligned cards.

## Review Criteria

Before approving a screen ask:

1. Does this look like serious software or a portfolio gimmick?
2. Is hierarchy typographic instead of color-dependent?
3. Is accent used as signal or decoration?
4. Do cards organize meaning or just fill space?
5. Would this give an engineering manager immediate clarity?

If one fails, refine the screen.

## Astro + Tailwind v4 implementation guidance

This project should translate Operator Core into **Astro + Tailwind CSS v4**.

### Theme setup

- Use CSS-first Tailwind setup with `@import "tailwindcss"`.
- Define semantic tokens in `@theme`.
- Keep raw brand hex values inside token declarations.
- Prefer tokens such as `--color-background`, `--color-surface`, `--color-border`, `--color-primary`, `--color-muted-foreground`.

### Suggested token mapping

```css
@import "tailwindcss";

@theme {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --color-background: #101214;
  --color-foreground: #e5e7eb;

  --color-surface: #1a1e26;
  --color-surface-alt: #1c1f25;
  --color-surface-elevated: #202634;

  --color-border: #2a3140;
  --color-border-strong: #384256;

  --color-muted-foreground: #a1a8b9;
  --color-muted: #7e8798;

  --color-primary: #365c8d;
  --color-primary-hover: #426a9e;
  --color-primary-active: #2c4d78;
  --color-signal: #20899f;

  --color-success: #2f8f72;
  --color-warning: #b98733;
  --color-danger: #b25461;
  --color-info: #4c83c3;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}
```

### Composition guidance

- Build primitives first: buttons, badges, cards, inputs, section containers, metadata rows.
- Use mono for technical metadata and supporting system cues.
- Prefer reusable section shells over one-off page-specific wrappers.
- Keep shadows subtle and secondary to borders.
- Use animation sparingly; a polished hover/focus state is more valuable than decorative motion.

## Implementation order

1. theme tokens
2. primitives
3. sections
4. pages
5. responsive refinement

## Final note

Operator Core is not just a dark theme.

It is a way of presenting software engineering with operational credibility, high professional signal, and refined visual taste.
