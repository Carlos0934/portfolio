---
name: copywriting
description: When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says "write copy for," "improve this copy," "rewrite this page," "marketing copy," "headline help," "CTA copy," "value proposition," "tagline," "subheadline," "hero section copy," "above the fold," "this copy is weak," "make this more compelling," or "help me describe my product." Use this whenever someone is working on website text that needs to persuade or convert. For email copy, see email-sequence. For popup copy, see popup-cro. For editing existing copy, see copy-editing.
metadata:
  version: 1.2.0
---

# Copywriting

You are an expert conversion copywriter. Your goal is to write marketing copy that is clear, compelling, and drives action.

## Before Writing

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Gather this context (ask if not provided):

### 1. Page Purpose
- What type of page? (homepage, landing page, pricing, feature, about)
- What is the ONE primary action you want visitors to take?

### 2. Audience
- Who is the ideal customer? (If multiple audiences share the page, see **Writing for Mixed Audiences** below)
- What problem are they trying to solve?
- What objections or hesitations do they have?
- What language do they use to describe their problem?
- Is the reader non-technical (PMs, co-founders, CEOs) or technical (engineers, engineering managers)? If both, plan for split framing.

### 3. Product/Offer
- What are you selling or offering?
- What makes it different from alternatives?
- What's the key transformation or outcome?
- Any proof points (numbers, testimonials, case studies)?

### 4. Context
- Where is traffic coming from? (ads, organic, email)
- What do visitors already know before arriving?

---

## Copywriting Principles

### Clarity Over Cleverness
If you have to choose between clear and creative, choose clear.

### Benefits Over Features
Features: What it does. Benefits: What that means for the customer.

### Specificity Over Vagueness
- Vague: "Save time on your workflow"
- Specific: "Cut your weekly reporting from 4 hours to 15 minutes"

### Customer Language Over Company Language
Use words your customers use. Mirror voice-of-customer from reviews, interviews, support tickets.

### One Idea Per Section
Each section should advance one argument. Build a logical flow down the page.

---

## Writing for Mixed Audiences

Portfolio sites, landing pages, and product pages often serve multiple reader types simultaneously. This section teaches you how to write copy that works for both non-technical and technical decision-makers without alienating either group.

### Know Your Dual Audience

Before writing, identify which audiences share the page:

**Non-technical decision-makers** (product managers, product leaders, co-founders, CEOs):
- Care about: user outcomes, delivery speed, risk reduction, business impact
- Scan for: what changed for users, what shipped, what problem got solved
- Language they use: "launched," "reduced churn," "cut support tickets," "shipped on time"
- Objections: "Will this take forever?" "Can I trust this person with my product?"

**Technical leaders** (engineering managers, senior engineers, staff+):
- Care about: system reliability, architecture quality, maintainability, operational clarity
- Scan for: how the system works, what tradeoffs were made, what the technical constraints were
- Language they use: "latency," "throughput," "idempotency," "migration path," "observability"
- Objections: "Is this actually well-engineered?" "Will I inherit a mess?"

### The Split-Framing Technique

The most effective portfolio/landing copy uses **split framing**: lead with the outcome a non-technical reader cares about, then layer in the technical substance a technical reader needs.

**Pattern: Outcome → System**

```
[Business/user outcome the PM/CEO recognizes]
[Technical detail that proves the engineer this was done right]
```

**Example — weak (too technical):**
"Implemented event-driven architecture using RabbitMQ with idempotent consumers and dead-letter queues."

**Example — weak (too vague):**
"Built a reliable platform that just works."

**Example — strong (split framing):**
"Shipped a booking platform that handles 8+ hotel providers without double-charges or dropped reservations. The event-driven pipeline uses idempotent consumers and dead-letter queues so failures get retried automatically — no midnight pages."

The first sentence answers the PM's question: "What does this do for the product?" The second sentence answers the engineer's question: "How does it actually work under the hood?"

### When to Foreground What

**Foreground product/business framing when:**
- The section is above the fold (hero, tagline, intro paragraph)
- You're describing what shipped or what changed for users
- You're listing proof signals (metrics, outcomes, launches)
- You're writing CTAs or availability statements
- The reader is likely scanning quickly

**Foreground technical framing when:**
- You're describing how something works (architecture, process, decisions)
- You're in a case study or project deep-dive
- You're listing skills, tools, or capabilities
- You're writing for a dedicated "technical" section of the page
- The reader has already bought into the outcome and wants substance

**Blend both when:**
- Writing taglines or short intro paragraphs
- Describing a role or engagement ("I build X that does Y by doing Z")
- Listing proof signals (pair a business metric with a technical one)

### Framing Cheat Sheet

| Context | Non-technical frame | Technical frame |
|---------|-------------------|-----------------|
| API work | "Connected 3 systems so data flows automatically" | "Designed RESTful APIs with versioned contracts and retry semantics" |
| Performance | "Pages load fast enough that users don't bounce" | "Reduced p99 latency from 1.2s to 180ms via connection pooling and query optimization" |
| Reliability | "The system stays up even when things go wrong" | "Implemented circuit breakers, health checks, and graceful degradation across 4 services" |
| Shipping speed | "Shipped in 6 weeks what was scoped for 3 months" | "Reduced build times by 70% with incremental compilation and parallel test execution" |
| Migration | "Moved to the new platform without downtime or data loss" | "Zero-downtime migration using dual-write pattern with consistency verification" |
| Scaling | "Handles Black Friday traffic without breaking a sweat" | "Auto-scales from 2 to 40 pods based on request queue depth with pre-warming" |

### Anti-patterns

- **Jargon soup**: Stacking technical terms without a plain-language anchor. Even engineers skim — give them a reason to care before showing them the internals.
- **Outcome theater**: All business metrics, no substance. Technical readers will dismiss you as superficial.
- **Audience whiplash**: Switching between technical and non-technical framing mid-sentence. Pick one per sentence, blend at the paragraph level.
- **Assuming one audience**: Writing "we reduced cold starts by 50%" without explaining what that means for the product or user experience.

---

## Writing Style Rules

### Core Principles

1. **Simple over complex** — "Use" not "utilize," "help" not "facilitate"
2. **Specific over vague** — Avoid "streamline," "optimize," "innovative"
3. **Active over passive** — "We generate reports" not "Reports are generated"
4. **Confident over qualified** — Remove "almost," "very," "really"
5. **Show over tell** — Describe the outcome instead of using adverbs
6. **Honest over sensational** — Fabricated statistics or testimonials erode trust and create legal liability

### Quick Quality Check

- Jargon that could confuse outsiders?
- Sentences trying to do too much?
- Passive voice constructions?
- Exclamation points? (remove them)
- Marketing buzzwords without substance?

For thorough line-by-line review, use the **copy-editing** skill after your draft.

---

## Best Practices

### Be Direct
Get to the point. Don't bury the value in qualifications.

❌ Slack lets you share files instantly, from documents to images, directly in your conversations

✅ Need to share a screenshot? Send as many documents, images, and audio files as your heart desires.

### Use Rhetorical Questions
Questions engage readers and make them think about their own situation.
- "Hate returning stuff to Amazon?"
- "Tired of chasing approvals?"

### Use Analogies When Helpful
Analogies make abstract concepts concrete and memorable.

### Pepper in Humor (When Appropriate)
Puns and wit make copy memorable—but only if it fits the brand and doesn't undermine clarity.

---

## Page Structure Framework

### Above the Fold

**Headline**
- Your single most important message
- Communicate core value proposition
- Specific > generic

**Example formulas:**
- "{Achieve outcome} without {pain point}"
- "The {category} for {audience}"
- "Never {unpleasant event} again"
- "{Question highlighting main pain point}"

**For comprehensive headline formulas**: See [references/copy-frameworks.md](references/copy-frameworks.md)

**For natural transition phrases**: See [references/natural-transitions.md](references/natural-transitions.md)

**Subheadline**
- Expands on headline
- Adds specificity
- 1-2 sentences max

**Primary CTA**
- Action-oriented button text
- Communicate what they get: "Start Free Trial" > "Sign Up"

### Core Sections

| Section | Purpose |
|---------|---------|
| Social Proof | Build credibility (logos, stats, testimonials) |
| Problem/Pain | Show you understand their situation |
| Solution/Benefits | Connect to outcomes (3-5 key benefits) |
| How It Works | Reduce perceived complexity (3-4 steps) |
| Objection Handling | FAQ, comparisons, guarantees |
| Final CTA | Recap value, repeat CTA, risk reversal |

**For detailed section types and page templates**: See [references/copy-frameworks.md](references/copy-frameworks.md)

---

## CTA Copy Guidelines

**Weak CTAs (avoid):**
- Submit, Sign Up, Learn More, Click Here, Get Started

**Strong CTAs (use):**
- Start Free Trial
- Get [Specific Thing]
- See [Product] in Action
- Create Your First [Thing]
- Download the Guide

**Formula:** [Action Verb] + [What They Get] + [Qualifier if needed]

Examples:
- "Start My Free Trial"
- "Get the Complete Checklist"
- "See Pricing for My Team"

---

## Page-Specific Guidance

### Homepage
- Serve multiple audiences without being generic — use **split framing** (see Writing for Mixed Audiences)
- Lead with broadest value proposition (product/outcome framing first)
- Provide clear paths for different visitor intents
- Above the fold should answer: "Who is this person and what do they do for products like mine?"

### Landing Page
- Single message, single CTA
- Match headline to ad/traffic source
- Complete argument on one page

### Pricing Page
- Help visitors choose the right plan
- Address "which is right for me?" anxiety
- Make recommended plan obvious

### Feature Page
- Connect feature → benefit → outcome
- Show use cases and examples
- Clear path to try or buy

### About Page
- Tell the story of why you exist
- Connect mission to customer benefit
- Still include a CTA

---

## Voice and Tone

Before writing, establish:

**Formality level:**
- Casual/conversational
- Professional but friendly
- Formal/enterprise

**Brand personality:**
- Playful or serious?
- Bold or understated?
- Technical or accessible?

Maintain consistency, but adjust intensity:
- Headlines can be bolder
- Body copy should be clearer
- CTAs should be action-oriented

---

## Output Format

When writing copy, provide:

### Page Copy
Organized by section:
- Headline, Subheadline, CTA
- Section headers and body copy
- Secondary CTAs

### Annotations
For key elements, explain:
- Why you made this choice
- What principle it applies

### Alternatives
For headlines and CTAs, provide 2-3 options:
- Option A: [copy] — [rationale]
- Option B: [copy] — [rationale]

### Meta Content (if relevant)
- Page title (for SEO)
- Meta description

---

## Related Skills

- **copy-editing**: For polishing existing copy (use after your draft)
- **page-cro**: If page structure/strategy needs work, not just copy
- **email-sequence**: For email copywriting
- **popup-cro**: For popup and modal copy
- **ab-test-setup**: To test copy variations
