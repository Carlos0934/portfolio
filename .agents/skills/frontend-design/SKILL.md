---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces aligned with the portfolio's Operator Core design system. Use this skill when the user asks to build or refine web pages, sections, components, layouts, or UI styling in Astro/Tailwind. Generates polished interfaces with strong hierarchy, restrained surfaces, and a serious systems-oriented visual language.
license: Complete terms in LICENSE.txt
---

This skill guides creation of production-grade frontend interfaces for this portfolio. Favor work that feels like serious software engineering communication: clear, structured, dark-first, and visually refined without becoming flashy or generic.

The user provides frontend requirements: a component, page, section, route, or interface to build or refine. They may include context about audience, hiring goals, technical constraints, or brand direction.

## When to Use

Use this skill when touching `.astro` files or frontend styling concerns related to:

- visual design
- UI structure
- UX and interaction quality
- accessibility
- layout or section restructuring
- CSS or Tailwind classes
- animations and motion behavior
- states, hover/focus/active feedback
- responsive presentation
- the visual side of forms, navigation, cards, tables, badges, buttons, or content sections

This skill should be the default whenever the task changes **how the user sees or interacts with the interface**.

### Typical triggers

- edit a `.astro` component to improve layout, hierarchy, or styling
- adjust classes, CSS, tokens, or theme behavior
- refine motion, transitions, loading states, or interaction feedback
- review accessibility, clarity, spacing, or responsive behavior
- restructure a page or section for stronger UX and visual signal

## When NOT to Use

Do **not** use this skill for work centered on:

- backend logic
- APIs
- database or data modeling
- server actions or business logic
- non-visual utility code
- content processing unrelated to presentation
- infrastructure, tooling, or deployment

It may still apply to a feature with backend logic, but only for the **visual/interaction layer** of that feature.

## Must

- read the Operator Core reference before major UI decisions
- read `src/styles/global.css` before changing tokens, theme, or global visual behavior
- keep the portfolio inside the Operator Core aesthetic and structural rules
- prioritize hierarchy, clarity, and scanning over visual novelty
- preserve accessibility and visible interaction states
- treat `.astro` files as UI architecture, not just markup containers

## Should

- prefer reusable primitives and section patterns over one-off UI treatments
- improve information density only when clarity also improves
- make technical content scan well through metadata, labels, rows, and grouping
- use animation sparingly and only when it improves perception or feedback
- keep responsive behavior calm and structurally consistent across breakpoints

## Never

- never redesign a component without checking the project references first
- never introduce a visual direction that conflicts with Operator Core
- never turn the interface into a flashy landing page or decorative portfolio piece
- never use color as the only carrier of hierarchy or meaning
- never apply this skill to non-visual refactors, backend code, or data concerns

## Project Reference

Before inventing a new visual direction, read and follow:

- [Operator Core design system reference](references/operator-core-design-system.md)

This reference is the default visual source of truth for this project.

## Mandatory Read Order Before Implementing

Before making important UI changes, read the relevant project source-of-truth files first:

1. **Always read** [Operator Core design system reference](references/operator-core-design-system.md)
   - Use it for principles, visual tone, component rules, review criteria, and structural design guidance.

2. **Read `src/styles/global.css` when** the change touches:
   - tokens
   - colors
   - typography
   - spacing
   - radii
   - surfaces
   - focus states
   - motion tokens
   - global utility or theme behavior

Do not invent a new design direction if these files already define the answer.

## Workflow Before Editing `.astro`

1. classify the task: visual/UI or non-visual
2. if non-visual, do not use this skill
3. read `references/operator-core-design-system.md`
4. if the change affects theme/tokens/global styling, read `src/styles/global.css`
5. identify the affected UI layer:
   - primitive
   - section
   - page composition
   - interaction state
6. define what should improve:
   - clarity
   - hierarchy
   - spacing
   - accessibility
   - motion
   - responsiveness
7. implement the smallest coherent visual change that matches the system
8. review against the quality bar before finishing

## Core Intent

The portfolio should communicate one reading first:

**Engineer who improves real systems, reduces operational friction, and designs useful software for execution.**

It should not feel like:

- a flashy startup landing page
- a decorative UI kit
- a gaming dashboard
- an AI-hype aesthetic
- a generic portfolio template

## Required Direction

When working in this project, default to these constraints unless the user explicitly asks otherwise:

- **Design system**: Operator Core
- **Stack alignment**: Astro + Tailwind CSS v4
- **Theme model**: CSS-first tokens via `@theme`
- **Mode**: dark-first by default
- **Typography**: Inter for UI/content, JetBrains Mono for metadata/system cues
- **Primary signal**: hierarchy, spacing, structure, and restrained accent color

## Site Structure and Signal Rules

The website should read like a serious engineering portfolio, not a visual experiment.

### Structural expectations

- clear hero with immediate positioning
- conversion-oriented section flow
- case studies and experience presented as evidence, not decoration
- technical metadata visible and easy to scan
- layouts should support hiring clarity first, visual flourish second

### Signal rules

- typography carries hierarchy
- cards organize information, not empty space
- accent color marks action, current state, or system signal
- mono text is for labels, metadata, timestamps, and technical cues
- tables, badges, status rows, and structured content are encouraged when they improve comprehension

### Layout rules

- preserve consistent rhythm between sections
- prefer aligned grids over expressive chaos
- keep desktop reading quality high without neglecting mobile
- do not overload the page with competing focal points
- each block should have a clear primary action or none at all

## Design Thinking

Before coding, understand the context and choose a direction that stays inside Operator Core rather than inventing a random aesthetic:

- **Purpose**: What system, proof of work, or conversion goal does this interface support?
- **Audience**: Recruiters, founders, hiring managers, engineering leads.
- **Signal**: What should feel operational, credible, and useful?
- **Constraints**: Astro, Tailwind, performance, accessibility, responsive behavior.
- **Taste**: Keep it sober, but not dull. Elegance comes from proportion, typography, rhythm, and detail.

**CRITICAL**: The goal is not maximalist originality. The goal is sharp, opinionated restraint with high craft.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Cohesive with the Operator Core system
- Visually confident without decorative excess
- Meticulously refined in spacing, type, contrast, and states

## Frontend System Guidelines

Focus on:
- **Typography**: Strong hierarchy first. Use Inter for headings/body and JetBrains Mono for labels, stack items, timestamps, and system metadata.
- **Color & Theme**: Use mostly neutrals. Accent color should signal action/state, not decorate every component.
- **Surfaces**: Quiet, stable panels with thin strokes and controlled contrast.
- **Motion**: Keep motion subtle and meaningful. Prefer hover/focus/enter transitions over decorative choreography.
- **Spatial Composition**: Use rhythm, alignment, grid consistency, and generous whitespace. Avoid chaotic asymmetry unless there is a clear information benefit.
- **Data/UI language**: Lean into tables, metadata rows, badges, status cues, system cards, and structured case-study layouts.

## Astro Component Guidance

When editing `.astro` files:

- separate structure, content hierarchy, and styling concerns clearly
- prefer reusable section and primitive patterns over one-off markup
- keep class usage intentional; avoid noisy utility piles without semantic grouping
- preserve readable markup so layout intent is obvious in the component
- treat animations, hover states, and transitions as part of UX quality, not decoration

### When editing `.astro` files, evaluate

- what is the main user action in this block?
- what information should scan first, second, and third?
- does the markup reflect the visual hierarchy?
- is the component a primitive, a composed block, or a page section?
- should this styling live locally or belong in shared theme/primitives?

## Astro + Tailwind Guidance

- Prefer Tailwind CSS v4 CSS-first configuration using `@import "tailwindcss"` and `@theme` tokens.
- Define Operator Core tokens as semantic theme variables in the main stylesheet.
- Keep raw hex usage inside token definitions, not scattered across components.
- Favor semantic utilities and reusable primitives over long one-off class piles.
- In Astro, keep sections cleanly separated and compose primitives for cards, badges, buttons, metadata rows, and tables.

## Accessibility and Interaction Rules

- keep visible focus states
- maintain clear contrast in dark mode
- do not rely on color alone for meaning
- keep interactive targets comfortable and readable
- ensure motion supports meaning and respects restraint
- make loading, disabled, invalid, hover, and active states visually clear
- preserve keyboard and screen-reader-friendly structure when changing layout or interactions

## Output Expectations

When this skill is used, the resulting UI work should:

- feel cohesive with the rest of the portfolio
- improve the user's ability to understand and navigate the content
- make the interface look more intentional, not simply more styled
- leave the codebase with cleaner visual structure, not just more classes
- maintain consistency with Operator Core and the project theme source

## Anti-Patterns

- Do not use glow-heavy dark mode.
- Do not default to startup gradient hero visuals.
- Do not make every surface elevated, colorful, or oversized.
- Do not use accent blue everywhere simultaneously.
- Do not make the portfolio feel like a template gallery.
- Do not remove clarity in the name of being "creative".
- Do not apply this skill to purely logical or backend changes.
- Do not redesign components in isolation without checking the project theme files first.
- Do not introduce visual patterns that fight Operator Core.

## Quality Bar

Before finalizing UI work, check:

1. Does it feel like serious software, not portfolio decoration?
2. Is hierarchy carried by type and layout more than by color?
3. Are accents used as signal rather than theme paint?
4. Would an engineering manager immediately understand the content structure?
5. Does the implementation match Astro + Tailwind project conventions?
6. Was the relevant source of truth read first (`references/operator-core-design-system.md`, `src/styles/global.css` when applicable)?

## Resources

- **Design system**: [Operator Core design system reference](references/operator-core-design-system.md)
- **Project theme source**: `src/styles/global.css`
