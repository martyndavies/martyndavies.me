---
title: Astro 8-Bit Personal Website Redesign
status: in-review
author: Martyn Davies
date: 2026-03-17
---

# Astro 8-Bit Personal Website Redesign

## Overview

Redesign martyndavies.me from Next.js to Astro with an 8-bit/pixel art aesthetic while preserving all existing content (writing, speaking, videos, open source projects).

## Goals

- Deliver a high-performance static site with Astro
- Implement a bold 8-bit visual style throughout
- Preserve all existing content and data
- Maintain interactive features (video modals, theme toggle)
- Improve site performance and SEO

## Architecture

### Technology Stack

- **Framework:** Astro 5.0
- **UI Framework:** React (for interactive components)
- **Styling:** Tailwind CSS + custom pixel utilities
- **Content:** MDX for static content, JSON for data
- **TypeScript:** Full type safety

### Directory Structure

```
src/
├── components/
│   ├── pixel/              # Pixel art UI components
│   │   ├── PixelCard.astro
│   │   ├── PixelButton.astro
│   │   └── PixelBorder.astro
│   ├── sections/           # Page sections
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Writing.astro
│   │   ├── Speaking.astro
│   │   ├── Videos.astro
│   │   └── OpenSource.astro
│   ├── interactive/        # React components
│   │   ├── VideoModal.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ShowMoreButton.tsx
│   └── ui/
│       └── SocialLink.astro
├── content/
│   └── about/              # MDX content for bio
│       └── main.mdx
├── data/                   # Reuse existing JSON files
│   ├── speaking.json
│   ├── writing.json
│   ├── videos.json
│   └── opensource.json
├── layouts/
│   └── PixelLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── pixel.css           # Pixel fonts, utilities
└── env.d.ts
```

## Design System: 8-Bit Aesthetic

### Typography

- **Headers:** Press Start 2P or VT323 (Google Fonts)
- **Body:** VT323 or Fira Code (monospace pixel)
- **Fallback:** System monospace

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Neon Green | #39ff14 | Primary accent, links |
| Magenta | #ff00ff | Secondary accent, headings |
| Cyan | #00ffff | Highlights, borders |
| Yellow | #ffff00 | Warnings, stars |
| Background Dark | #0a0a0a | Main dark theme bg |
| Background Light | #f0f0f0 | Main light theme bg |
| White | #ffffff | Text on dark |
| Black | #000000 | Text on light |

### Visual Effects

- Hard pixel borders (2-4px, no anti-aliasing)
- Dithering patterns on images
- Subtle CRT scanline overlay
- Pixelated images (CSS `image-rendering: pixelated`)
- Blocky shadows (no blur)
- Hover lift with pixel offset
- Text shadow for pixel depth

### Pixel Components

#### PixelCard
```astro
<div class="pixel-card">
  <div class="pixel-border">
    <slot />
  </div>
</div>

<style>
.pixel-card {
  background: var(--bg-color);
  padding: 2px;
}
.pixel-border {
  border: 4px solid var(--border-color);
  background: var(--bg-color);
}
</style>
```

#### PixelButton
- Chunky padding (12px 24px)
- Hard border (4px)
- Text shadow
- Hover: translateY(-2px), active: translateY(0)

## Page Sections

### 1. Hero Section
- Large pixel-font name (h1, 48-64px)
- Tagline with subtitle
- Social links in pixel buttons
- Theme toggle (top right)

### 2. About Section
- Two-column layout on desktop
- Left: Bio text
- Right: Work history cards

### 3. Work History Cards
- PixelCard for each company
- Company icon + role + dates
- Links to company websites

### 4. Featured Projects (Mini)
- 3-4 open source projects as preview cards
- Links to GitHub

### 5. Videos Section
- Grid of video cards with thumbnails
- Click opens VideoModal with YouTube embed
- Show more/less toggle

### 6. Writing Section
- Article cards with title and publication
- External link icons
- Badges for publication name

### 7. Speaking Section
- Talk cards with title and link
- Conference/event info

### 8. Open Source Section
- Project cards with stats (stars, forks)
- Programming language badges

### 9. Footer
- Social links in pixel buttons
- Copyright with current year

## Data Types

### Video
```typescript
interface Video {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}
```

### Writing
```typescript
interface Writing {
  title: string;
  url: string;
  site?: string;
}
```

### Speaking
```typescript
interface Speaking {
  title: string;
  url: string;
}
```

### Open Source
```typescript
interface OpenSource {
  name: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  issues?: number;
  language: string;
}
```

### Company/History
```typescript
interface Company {
  name: string;
  url: string;
  icon: string;
  role: string;
  period: string;
}
```

## Interactive Components (React)

### VideoModal
- React state-driven modal
- YouTube iframe embed
- Pixel frame border
- Close button (pixel style)
- Keyboard: Escape to close

### ThemeToggle
- Toggle between dark/light
- Pixel sun/moon icons
- Store preference in localStorage
- No flash of wrong theme

### ShowMoreButton
- Toggle expanded state
- Smooth count updates
- Pixel arrow icons

## Implementation Steps

1. **Setup** - Initialize Astro with React and Tailwind
2. **Design System** - Configure Tailwind, fonts, colors
3. **Pixel Components** - Build Card, Button, Border utilities
4. **Data Porting** - Create TypeScript interfaces, copy JSON
5. **React Components** - VideoModal, ThemeToggle
6. **Page Layout** - Create PixelLayout.astro
7. **Sections** - Build each section with pixel styling
8. **Theme System** - Implement dark/light with Tailwind
9. **Testing** - Responsive layout, interactions
10. **Deploy** - Build and deploy

## Testing Strategy

- **Visual Regression:** Percy or Chromatic
- **Accessibility:** a11y audit (contrast, keyboard nav)
- **Performance:** Lighthouse score 95+
- **Responsive:** Test mobile, tablet, desktop

## Performance Budget

- **LCP:** < 2.5s
- **CLS:** < 0.1
- **FID:** < 100ms
- **Bundle:** < 50kb initial (Astro partial hydration)
- **Images:** Optimized, WebP format

## Dependencies

```json
{
  "astro": "^5.0.0",
  "@astrojs/react": "^4.0.0",
  "@astrojs/tailwind": "^5.0.0",
  "@astrojs/vercel": "^10.0.0",
  "@astrojs/sitemap": "^3.2.0",
  "@astrojs/rss": "^4.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.0.0",
  "lucide-react": "^0.500.0"
}
```

## Data Migration

### Source Files
- Current data located at: `~/development/martyndavies.me/data/`
- Files to migrate:
  - `data/speaking.json` - Conference talks and presentations
  - `data/writing.json` - Blog posts and articles
  - `data/videos.json` - YouTube videos with metadata
  - `data/opensource.json` - Open source projects with stats

### Migration Checklist
- [ ] Copy all 4 JSON files to `src/data/`
- [ ] Create TypeScript interfaces in `src/types/index.ts`
- [ ] Validate JSON against interfaces
- [ ] Type each JSON import
- [ ] Verify data integrity (no missing fields)

## Theme System

### Dark/Light Mode Implementation
- Use Tailwind's `darkMode: 'class'` strategy
- CSS custom properties mapped to Tailwind:
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  --accent-primary: #39ff14;
  --border-color: #000000;
}

.dark {
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  --accent-primary: #39ff14;
  --border-color: #39ff14;
}
```
- Tailwind config maps CSS vars to theme colors
- ThemeToggle uses `document.documentElement.classList.toggle('dark')`
- Persist to localStorage with `window.matchMedia('(prefers-color-scheme: dark')` as default

## Image Strategy

### Assets Structure
```
src/
└── assets/
    ├── images/
    │   ├── thumbnails/
    │   └── avatars/
    └── fonts/
```

### Image Components
- Use `astro:assets` for local images (optimized WebP)
- Remote images (YouTube thumbnails): Use native `<img>` with explicit width/height
- All images: `image-rendering: pixelated` for pixel art style
- Lazy loading for below-fold content
- Eager load Hero image (LCP optimization)

## SEO & Metadata

### PixelLayout.astro Head
```astro
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
```

### Sitemap & RSS
- Add `@astrojs/sitemap` for sitemap.xml
- Add RSS feed at `/rss.xml` via `@astrojs/rss`

## Accessibility

### Requirements
- Focus-visible styles on all interactive elements (pixel outline)
- Keyboard navigation with visible focus states
- ARIA labels on icon-only buttons
- Skip to main content link
- Color contrast ratio 4.5:1 minimum
- Reduced motion preference respected (disable CRT effects)
- Screen reader announcements for modal open/close

### Pixel Focus Styles
```css
.pixel-focus:focus-visible {
  outline: 4px solid var(--accent-primary);
  outline-offset: 4px;
}
```

## Error Handling

### Data Loading Errors
- Graceful fallback: Show "Content unavailable" message
- Log error to console for debugging
- Don't crash page on missing data

### Video Modal Errors
- YouTube embed: Show error state if video unavailable
- Fallback: Link to YouTube directly
- Error boundary: React ErrorBoundary component

### Missing Images
- Use placeholder pixel image
- Log missing asset to console

## Content Collections

### src/content/config.ts
```typescript
import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    updated: z.date().optional(),
  }),
});

export const collections = {
  'about': aboutCollection,
};
```

## Deployment

### Target
- **Vercel** - Native Astro support, zero config
- Adapter: `@astrojs/vercel/static` or `@astrojs/vercel/serverless`

### Build Configuration
```typescript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
```

### Deploy Steps
1. Push to GitHub repository
2. Connect repo to Vercel
3. Auto-detect Astro framework
4. Deploy on push to main

## Success Criteria

- [ ] All existing content displayed correctly
- [ ] 8-bit aesthetic implemented throughout
- [ ] Video modal works as before
- [ ] Theme toggle works and persists
- [ ] Lighthouse performance 95+
- [ ] Responsive on all screen sizes
- [ ] Accessible (WCAG 2.1 AA)