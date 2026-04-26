---
name: Operator Core
colors:
  surface: "#1F2228"
  surface-dim: "rgba(255,255,255,0.03)"
  surface-bright: "rgba(255,255,255,0.08)"
  surface-container-lowest: "#1F2228"
  surface-container-low: "rgba(255,255,255,0.03)"
  surface-container: "rgba(255,255,255,0.05)"
  surface-container-high: "rgba(255,255,255,0.08)"
  surface-container-highest: "rgba(255,255,255,0.10)"
  on-surface: "#FFFFFF"
  on-surface-variant: "rgba(255,255,255,0.70)"
  inverse-surface: "#FFFFFF"
  inverse-on-surface: "#1F2228"
  outline: "rgba(255,255,255,0.20)"
  outline-variant: "rgba(255,255,255,0.10)"
  surface-tint: "#365C8D"
  primary: "#365C8D"
  on-primary: "#FFFFFF"
  primary-container: "rgba(54,92,141,0.20)"
  on-primary-container: "#FFFFFF"
  inverse-primary: "#8FAED6"
  secondary: "#20899F"
  on-secondary: "#FFFFFF"
  secondary-container: "rgba(32,137,159,0.18)"
  on-secondary-container: "#FFFFFF"
  tertiary: "rgba(255,255,255,0.70)"
  on-tertiary: "#1F2228"
  tertiary-container: "rgba(255,255,255,0.08)"
  on-tertiary-container: "#FFFFFF"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#8FAED6"
  primary-fixed-dim: "#365C8D"
  on-primary-fixed: "#0B1118"
  on-primary-fixed-variant: "#D9E6F7"
  secondary-fixed: "#79C2D1"
  secondary-fixed-dim: "#20899F"
  on-secondary-fixed: "#081216"
  on-secondary-fixed-variant: "#D7F3F8"
  tertiary-fixed: "rgba(255,255,255,0.20)"
  tertiary-fixed-dim: "rgba(255,255,255,0.10)"
  on-tertiary-fixed: "#FFFFFF"
  on-tertiary-fixed-variant: "rgba(255,255,255,0.70)"
  background: "#1F2228"
  on-background: "#FFFFFF"
  surface-variant: "rgba(255,255,255,0.10)"
typography:
  display:
    fontFamily: JetBrains Mono
    fontSize: 64px
    fontWeight: "700"
    lineHeight: 72px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  title-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 0px
  DEFAULT: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    borderColor: "{colors.outline}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
  card-profile:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    borderColor: "{colors.outline-variant}"
  card-walk-stat:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  input-field:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    borderColor: "{colors.outline-variant}"
  list-item-walker:
    backgroundColor: transparent
    padding: "{spacing.sm}"
    rounded: "{rounded.md}"
  list-item-walker-hover:
    backgroundColor: "{colors.surface-container-high}"
  badge-status:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
---

## Brand & Style

The design system is built to communicate engineering authority, operational clarity, and restrained technical confidence. The brand personality is sober, reliable, systems-oriented, and explicitly anti-hype.

The chosen style is **Dark Brutalist Systems UI** with an editorial-spec presentation. It uses thin borders, disciplined spacing, and a strong monospace hierarchy to make the interface feel like an operating manual rather than a marketing site. The result feels engineered, premium, and calm.

## Colors

The palette centers on a near-black canvas supported by white type, low-opacity surface layers, and two semantic accents.

- **Primary:** Use for main actions, active states, and selection emphasis.
- **Secondary:** Use for signal, live system status, automation markers, and operational badges.
- **Neutral:** A range of opacity-based whites define surfaces, dividers, and structural depth.
- **Base Background:** The blue-black foundation keeps the UI technical, controlled, and premium.

## Typography

This design system uses **JetBrains Mono** for headlines, labels, buttons, and section framing, paired with **Inter** for body copy and dense support text.

- **Headlines:** Monospace bold weights create an engineering-grade hierarchy and reinforce the terminal / systems-manual tone.
- **Body:** Inter keeps dense content readable and prevents the layout from becoming visually mechanical.
- **Labels:** Small UI metadata uses mono labels to maintain consistency across components, tokens, and navigation.

## Layout & Spacing

The layout follows an **Asymmetrical Systems Grid** with a left identity rail and a right modular content matrix.

- **Whitespace:** Spacing is deliberate and structural. Use `md`, `lg`, and `xl` to separate sections and keep dense information readable.
- **Rhythm:** The system follows an 8px spacing scale, with 24px gutters and margins visible across the board.
- **Containers:** The left rail anchors identity and tone, while the right side organizes tokens, components, and previews in a strict multi-row grid.

## Elevation & Depth

This design system uses **Borders and Tonal Layers** instead of shadow-heavy elevation.

- **Surfaces:** Panels rely on subtle opacity fills above the main background rather than card-like lifting.
- **Shadows:** Shadows are minimal to absent. Structure is created through 1px rules, surface contrast, and alignment.
- **Interactions:** Hover and active states brighten surfaces or switch to semantic accent fills rather than lifting elements off the page.

## Shapes

The shape language is defined by **Sharp and Controlled Radii** to reinforce technical precision.

- **Buttons:** Primary CTAs use `8px` (`rounded-lg`) to feel deliberate without becoming soft.
- **Cards:** System panels and preview cards use `8px` to `12px` radii depending on density and importance.
- **Inputs:** Inputs use `4px` radii to stay aligned with the blueprint-like structure.
- **Icons:** Icons should be minimal, thin-stroked, and geometric, with restrained corner treatment.

## Components

### Buttons & Inputs

Buttons rely on semantic fill and border contrast rather than motion-heavy effects. Primary buttons use `accent primary`, outlined buttons use `border strong`, and ghost actions remain text-first. Inputs stay transparent or surface-subtle with clear borders. Use subtle 150ms transitions for color, border, and surface state changes.

### Cards & Elevation

The core card language is operational, not decorative. `card-profile` behaves as a system panel with low-opacity fill and a 1px border. Compact signal cards and status elements can use the teal secondary system for live or automation states.

### Lists & Navigation

Navigation items use a simple underline or accent rule for active state. List rows and metadata panels should maintain strong alignment and dense readability. Use `badge-status` for system health, automation state, or availability indicators. The interaction model should always prioritize clarity over flourish.
