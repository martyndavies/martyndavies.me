# martyndavies.me — Agent Context

## Project Overview

Personal portfolio site for Martyn Davies. Astro-based, deployed to Cloudflare Pages. Content is a mix of static pages, blog posts (Astro Content Collections), and external writing/video data.

## Tech Stack

- **Framework:** Astro 5.x (static output)
- **Styling:** Tailwind CSS 4.x with `@theme` tokens
- **Fonts:** Geist Variable (sans), JetBrains Mono (mono)
- **Icons:** Phosphor Icons React
- **Deployment:** Cloudflare Pages via `@astrojs/cloudflare`
- **Package Manager:** pnpm

## Key Files & Structure

```
├── src/
│   ├── components/          # Astro components (Nav, Hero, Footer, Cards, etc.)
│   ├── layouts/
│   │   └── BaseLayout.astro   # Global layout: meta, OG, nav, footer, theme script
│   ├── pages/
│   │   ├── index.astro          # Homepage (Hero + sections)
│   │   ├── about.astro + .md.ts # About page + plain text API route
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog listing
│   │   │   └── [slug].astro     # Blog post page
│   │   ├── writing.astro        # External articles listing
│   │   ├── videos.astro         # Video listing
│   │   ├── contact.astro + .md.ts
│   │   └── llms.txt.ts          # Machine-readable site index
│   ├── data/
│   │   ├── writing.ts           # External article metadata
│   │   └── videos.ts            # Video metadata
│   ├── content.config.ts        # Astro content collections schema
│   ├── content/
│   │   └── blog/                # Markdown blog posts
│   └── styles/
│       └── global.css           # Tailwind theme tokens, dark mode, base styles
├── public/
│   ├── favicon.svg
│   └── og-default.png
├── PRODUCT.md               # Brand strategy, users, personality, principles
├── DESIGN.md                # Visual design system (Stitch format)
└── .impeccable/design.json  # Sidecar with tokens, components, narrative
```

## Running the Site

```bash
pnpm dev          # Astro dev server (localhost:4321)
pnpm build        # Static build
pnpm preview      # Build + wrangler dev
pnpm deploy       # Build + wrangler deploy
```

## Design System Quick Reference

- **Creative North Star:** "The Quiet Terminal"
- **Register:** `brand` (portfolio, not product)
- **Palette:** OKLCH tinted neutrals + single teal accent. No #000, no #fff.
- **Fonts:** Geist Variable (body/headings), JetBrains Mono (labels/nav/metadata)
- **Motion:** Color transitions only. No layout animation. Respects `prefers-reduced-motion`.
- **Elevation:** Flat. No shadows. Depth via tonal layering.
- **Layout:** Max content width `max-w-3xl` (~768px), `px-6` gutters.
- **Anti-patterns:** No hero metrics, no gradient text, no glassmorphism, no card grids, no em dashes.

See `DESIGN.md` for full tokens, components, and rules.

## Content Sources

- **Blog posts:** Markdown files in `src/content/blog/`, schema: `{ title, date, excerpt, draft? }`
- **External articles:** Hardcoded in `src/data/writing.ts` with site labels
- **Videos:** Hardcoded in `src/data/videos.ts` with YouTube thumbnail generation
- **Plain text versions:** Every content page has a `.md.ts` API route serving raw markdown

## Theme & Dark Mode

- Toggle stored in `localStorage.theme`, falls back to `prefers-color-scheme`
- CSS custom properties via `@theme` in `global.css`
- Transition class `.theme-transitioning` applied during toggle to avoid flash

## Accessibility

- Semantic HTML, focus indicators, skip link
- `prefers-reduced-motion` respected
- Every page has a plain-text `.md` endpoint for screen readers / text-mode browsers

---

## New Page Development Process

When adding a new page to the site, follow this process exactly. Do not skip steps.

### Step 1: Plan with the user

Before writing any code, discuss with the user:

1. **What is the page about?** What content will it hold? Who is it for?
2. **Is the content new or does it reference existing external content?** If external, where does the data live (new data file, content collection, API, etc.)?
3. **Should it live in the navigation?** If yes, where in the order? If no, how will people find it (inline links, footer, etc.)?
4. **Does it need a plain-text `.md` version?** Default is yes for all content pages.

Do not proceed to Step 2 until the user confirms these answers.

### Step 2: Design overview with `/impeccable shape`

Run `impeccable shape <page-name>` to produce a design brief. This step:

- Reads `PRODUCT.md` and `DESIGN.md` for context
- Proposes layout, content structure, and component choices
- Outputs a confirmed design brief before any code is written

Do not write code until the user confirms the shape brief.

### Step 3: Implement the page

Build the page following:
- The confirmed shape brief
- `DESIGN.md` tokens and component patterns
- Existing patterns in `src/components/` and `src/pages/`
- The plain-text `.md.ts` API route if applicable

### Step 4: Code review with `/impeccable critique`

Delegate to a subagent:

```
Run /impeccable critique on the newly implemented page.
Report back:
- Overall score and heuristic breakdown
- Specific UX issues found
- Recommended fixes with priority (must-fix vs nice-to-have)
```

Implement all `must-fix` items before proceeding. Discuss `nice-to-have` with the user.

### Step 5: Final pass with `/impeccable polish`

Delegate to a subagent:

```
Run /impeccable polish on the page.
Report back:
- Quality issues found (a11y, perf, responsive, copy, edge cases)
- Fixes applied or recommended
```

Implement all reported issues. The page is now ready for the user to review.

---

## General Guidelines

- **Minimal changes.** Don't over-engineer. Match existing patterns.
- **No new dependencies without asking.** The stack is intentionally lean.
- **Test in both light and dark mode.** Every change.
- **Test the plain-text version.** If the page has a `.md.ts` route, verify it renders correctly.
- **Update `llms.txt` if the page changes the site structure.** Keep the machine-readable index accurate.
