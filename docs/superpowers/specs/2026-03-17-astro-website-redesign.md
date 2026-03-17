---
title: Astro 8-Bit Personal Website Redesign
status: pending-review
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
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.0.0",
  "lucide-react": "^0.500.0"
}
```

## Future Considerations

- Add View Transitions for smooth navigation
- Add blog with MDX content collection
- Add RSS feed generation
- Add sitemap.xml
- Add SEO metadata

## Success Criteria

- [ ] All existing content displayed correctly
- [ ] 8-bit aesthetic implemented throughout
- [ ] Video modal works as before
- [ ] Theme toggle works and persists
- [ ] Lighthouse performance 95+
- [ ] Responsive on all screen sizes
- [ ] Accessible (WCAG 2.1 AA)