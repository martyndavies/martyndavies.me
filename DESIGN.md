---
name: martyndavies.me
description: Personal portfolio of Martyn Davies — Builder Relations, Developer Education & Experience Leader
colors:
  tool-teal: "oklch(0.55 0.12 185)"
  bright-tool-teal: "oklch(0.75 0.10 185)"
  deep-tool-teal: "oklch(0.48 0.13 185)"
  pale-tool-teal: "oklch(0.82 0.09 185)"
  warm-cream: "oklch(0.985 0.006 185)"
  paper-white: "oklch(0.998 0.004 185)"
  soft-mist: "oklch(0.90 0.008 185)"
  deep-slate: "oklch(0.18 0.012 215)"
  medium-gray: "oklch(0.50 0.014 210)"
  code-cream: "oklch(0.93 0.010 185)"
  midnight-navy: "oklch(0.13 0.010 215)"
  deep-navy: "oklch(0.17 0.010 215)"
  charcoal: "oklch(0.23 0.010 215)"
  warm-white: "oklch(0.94 0.008 195)"
  soft-gray: "oklch(0.62 0.014 210)"
  code-navy: "oklch(0.20 0.012 215)"
typography:
  display:
    fontFamily: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"JetBrains Mono", ui-monospace, monospace'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "56px"
components:
  article-row:
    backgroundColor: "transparent"
    textColor: "{colors.deep-slate}"
    rounded: "{rounded.sm}"
    padding: "16px 12px"
  article-row-hover:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.tool-teal}"
  featured-card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.deep-slate}"
    rounded: "{rounded.md}"
    padding: "24px 12px"
  featured-card-hover:
    backgroundColor: "{colors.soft-mist}"
    textColor: "{colors.tool-teal}"
  nav-link:
    textColor: "{colors.medium-gray}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.tool-teal}"
  section-header:
    textColor: "{colors.medium-gray}"
    typography: "{typography.label}"
---

# Design System: martyndavies.me

## 1. Overview

**Creative North Star: "The Quiet Terminal"**

A tech-minimal personal portfolio that treats the browser like a refined command-line interface: spacious, legible, and free of decoration. Every element exists to transmit information. The design rejects SaaS landing-page conventions — no heroes, no metrics, no gradients, no glassmorphism. Space is not empty; it is the signal that the author knows what to leave out.

The system is built on tinted neutrals (warm cream in light, midnight navy in dark) with a single muted teal accent that appears sparingly. Typography is split between Geist Variable for content and JetBrains Mono for UI chrome, creating the feel of a well-configured terminal emulator dressed for polite company. Components are understated but not invisible at rest: they carry subtle structure through clean borders and tonal shifts rather than complete flatness.

**Key Characteristics:**
- Flat surfaces; no drop shadows
- Mono type for all labels, navigation, and metadata
- Generous whitespace with a max content width of ~768px
- Color transitions as the sole motion language
- Every list item is a full-width row with hover state, not a card
- Plain text fallback for every page

## 2. Colors

A restrained, tinted-neutral palette with a single teal accent. Every neutral is warmed toward the accent hue so the system never feels cold or clinical.

### Primary
- **Tool Teal** (oklch(0.55 0.12 185)): Links, active nav states, and the occasional structural marker. Used on ≤10% of any screen.
- **Bright Tool Teal** (oklch(0.75 0.10 185)): Dark-mode accent. Appears in the same roles as Tool Teal but adapted for the darker ground.
- **Deep Tool Teal** (oklch(0.48 0.13 185)): Light-mode hover/active accent. Slightly darker and more saturated than the base accent.
- **Pale Tool Teal** (oklch(0.82 0.09 185)): Dark-mode hover accent. Lighter and less saturated for contrast on dark surfaces.

### Neutral
- **Warm Cream** (oklch(0.985 0.006 185)): Light-mode page background. Slightly warm, never pure white.
- **Paper White** (oklch(0.998 0.004 185)): Light-mode surface/hover state. Just off-white enough to separate from the background.
- **Soft Mist** (oklch(0.90 0.008 185)): Light-mode borders and dividers. Low contrast by design.
- **Deep Slate** (oklch(0.18 0.012 215)): Light-mode primary text. Nearly black, tinted cool.
- **Medium Gray** (oklch(0.50 0.014 210)): Light-mode secondary text, metadata, inactive nav.
- **Code Cream** (oklch(0.93 0.010 185)): Light-mode code block background.
- **Midnight Navy** (oklch(0.13 0.010 215)): Dark-mode page background. Deep, not pure black.
- **Deep Navy** (oklch(0.17 0.010 215)): Dark-mode surface/hover state.
- **Charcoal** (oklch(0.23 0.010 215)): Dark-mode borders and dividers.
- **Warm White** (oklch(0.94 0.008 195)): Dark-mode primary text. Soft, not harsh.
- **Soft Gray** (oklch(0.62 0.014 210)): Dark-mode secondary text, metadata, inactive nav.
- **Code Navy** (oklch(0.20 0.012 215)): Dark-mode code block background.

### Named Rules
**The One Voice Rule.** The primary accent is used on ≤10% of any given screen. Its rarity is the point.

**The Tinted Neutral Rule.** No #000, no #fff. Every gray carries a whisper of the brand hue.

## 3. Typography

**Display Font:** Geist Variable (ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist Variable (ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (ui-monospace, monospace)

**Character:** A sans-serif body with a mono personality. Geist provides calm, geometric readability; JetBrains Mono handles all UI chrome, navigation, and metadata, giving the site the rhythm of a well-designed terminal.

### Hierarchy
- **Display** (700, 1.875rem, 1.25): Hero name and major headings. Tracking tight.
- **Headline** (700, 1.5rem–1.875rem, 1.2): Featured blog post titles, section highlights.
- **Title** (500, 1rem, 1.4): Card and list item titles. The workhorse heading.
- **Body** (400, 1rem / 0.875rem, 1.6): Paragraph text. Max line length 65–75ch.
- **Label** (400, 0.75rem, 1.5, letter-spacing 0.1em, uppercase): Navigation, dates, metadata, tags. Mono only.

### Named Rules
**The Mono For Chrome Rule.** All UI labels, navigation, dates, and metadata use JetBrains Mono. Body and headings use Geist.

## 4. Elevation

The system is flat. No drop shadows, no lift, no glassmorphism. Depth and hierarchy are conveyed through tonal layering: background → surface → border. A hover state shifts an element's background from transparent to the surface color, which is the only "elevation" event.

### Shadow Vocabulary
None.

### Named Rules
**The Flat By Default Rule.** Surfaces are flat at rest. Shadows are prohibited.

## 5. Components

All components are understated but carry subtle structure at rest. They respond on interaction with color and background shifts, never with layout animation.

### Article / List Rows
- **Shape:** Full-width rows with 6px radius (`rounded-sm`), negative margin (`-mx-3`) plus padding (`px-3`) to create a clickable band
- **Rest:** Transparent background with a visible `border-b` separator in Soft Mist / Charcoal
- **Hover:** Background shifts to Paper White / Deep Navy; title shifts to Tool Teal / Bright Tool Teal
- **Transition:** `transition-colors` only

### Featured Card
- **Shape:** 8px radius (`rounded-md`), same negative-margin band pattern
- **Rest:** Paper White / Deep Navy background by default (slightly more defined than standard rows)
- **Hover:** Background shifts to Soft Mist / Charcoal
- **Header:** "Latest post" label in Tool Teal / Bright Tool Teal, uppercase mono, tracking-widest

### Navigation
- **Style:** Sticky header, `backdrop-blur-sm`, bottom border in Soft Mist / Charcoal
- **Logo/Name:** Mono text-sm, medium weight
- **Links:** Mono text-xs, uppercase, tracking-wider. Active state in Tool Teal / Bright Tool Teal; inactive in Medium Gray / Soft Gray
- **Mobile:** Hamburger reveal, same styling, full-width dropdown
- **Theme Toggle:** Icon button with hover background shift

### Links
- **Inline:** Underline with `underline-offset-2`, color shift on hover
- **Section "See all":** Mono text-xs, Tool Teal / Bright Tool Teal, `underline-offset-4`, arrow indicator

### Inputs / Fields
Not currently used. If introduced: stroke in Soft Mist / Charcoal, 6px radius, focus ring in Tool Teal / Bright Tool Teal.

## 6. Do's and Don'ts

### Do:
- **Do** use generous whitespace. The max content width is 768px (`max-w-3xl`) with `px-6` gutters.
- **Do** use JetBrains Mono for all labels, nav, dates, and metadata.
- **Do** tint every neutral toward the teal hue (chroma 0.005–0.01 is enough).
- **Do** make interactive elements respond with color and background shifts, never with layout animation.
- **Do** respect `prefers-reduced-motion`.
- **Do** keep components slightly defined at rest — a subtle background or clean border — rather than completely flat and invisible.

### Don't:
- **Don't** use drop shadows, lift effects, or glassmorphism. The Flat By Default Rule is absolute.
- **Don't** use gradient text, gradient backgrounds, or decorative gradients of any kind.
- **Don't** use border-left or border-right greater than 1px as a colored accent stripe on any element.
- **Don't** build a massive hero section with big-number metrics. This is a portfolio, not a SaaS landing page.
- **Don't** use generic AI-tool marketing copy, meaningless buzzwords, or identical card grids.
- **Don't** use em dashes. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** wrap everything in a container. Most things don't need one.
