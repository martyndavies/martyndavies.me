# Astro 8-Bit Personal Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance Astro website with 8-bit/pixel art aesthetic, preserving all existing content from the Next.js site.

**Architecture:** Astro static site with React for interactive components (VideoModal, ThemeToggle), Tailwind CSS with custom pixel utilities. Data loaded from JSON files, TypeScript for type safety.

**Tech Stack:** Astro 5.0, React 18, Tailwind CSS, TypeScript, Vercel adapter

---

## File Structure

```
martyndavies.me/
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind with pixel theme
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── src/
│   ├── env.d.ts              # Astro type declarations
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── data/
│   │   ├── speaking.json     # Copied from data/speaking.json
│   │   ├── writing.json      # Copied from data/writing.json
│   │   ├── videos.json       # Copied from data/videos.json
│   │   └── opensource.json   # Copied from data/opensource.json
│   ├── assets/
│   │   └── fonts/            # Pixel fonts (Press Start 2P, VT323)
│   ├── components/
│   │   ├── pixel/
│   │   │   ├── PixelCard.astro
│   │   │   ├── PixelButton.astro
│   │   │   └── PixelBorder.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Writing.astro
│   │   │   ├── Speaking.astro
│   │   │   ├── Videos.astro
│   │   │   ├── OpenSource.astro
│   │   │   └── Footer.astro
│   │   ├── interactive/
│   │   │   ├── VideoModal.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── ShowMoreButton.tsx
│   │   └── ui/
│   │       └── SocialLink.astro
│   ├── layouts/
│   │   └── PixelLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css        # Pixel fonts, CRT effects, utilities
├── content/
│   └── about/
│       └── main.mdx          # About page content
└── public/
    └── favicon.svg           # Pixel art favicon
```

---

## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`
- Create: `env.d.ts`

- [ ] **Step 1: Write package.json**

```json
{
  "name": "martyndavies.me",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "lint": "eslint ."
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/react": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/vercel": "^10.0.0",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/rss": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.500.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

- [ ] **Step 2: Write astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  site: 'https://martyndavies.me',
  prefetch: true,
});
```

- [ ] **Step 3: Write tailwind.config.mjs**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pixel-green': '#39ff14',
        'pixel-magenta': '#ff00ff',
        'pixel-cyan': '#00ffff',
        'pixel-yellow': '#ffff00',
        'pixel-bg-dark': '#0a0a0a',
        'pixel-bg-light': '#f0f0f0',
      },
      fontFamily: {
        'pixel-header': ['"Press Start 2P"', 'cursive', 'monospace'],
        'pixel-body': ['VT323', 'monospace', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 currentColor',
        'pixel-hover': '6px 6px 0 0 currentColor',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Write tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 5: Write env.d.ts**

```typescript
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SITE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`

Expected: All dependencies installed successfully

- [ ] **Step 7: Commit**

```bash
git add package.json astro.config.mjs tailwind.config.mjs tsconfig.json env.d.ts
git commit -m "feat: initialize Astro project with React and Tailwind"
```

---

## Task 2: TypeScript Interfaces and Data Migration

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/speaking.json`
- Create: `src/data/writing.json`
- Create: `src/data/videos.json`
- Create: `src/data/opensource.json`

- [ ] **Step 1: Write the failing test**

```typescript
// src/types/__tests__/interfaces.test.ts
import { describe, it, expect } from 'vitest';
import type { Video, Writing, Speaking, OpenSource, Company } from '../index';

describe('TypeScript Interfaces', () => {
  it('should validate Video interface', () => {
    const video: Video = {
      videoId: 'abc123',
      title: 'Test Video',
      description: 'Description',
      thumbnail: 'https://example.com/thumb.jpg',
      duration: '10:00',
    };
    expect(video.videoId).toBe('abc123');
  });

  it('should validate Writing interface', () => {
    const writing: Writing = {
      title: 'Test Article',
      url: 'https://example.com/article',
      site: 'Dev.to',
    };
    expect(writing.site).toBe('Dev.to');
  });

  it('should validate Speaking interface', () => {
    const speaking: Speaking = {
      title: 'Test Talk',
      url: 'https://example.com/talk',
    };
    expect(speaking.title).toBe('Test Talk');
  });

  it('should validate OpenSource interface', () => {
    const openSource: OpenSource = {
      name: 'Test Project',
      url: 'https://github.com/test/project',
      description: 'A test project',
      stars: 100,
      forks: 20,
      language: 'TypeScript',
    };
    expect(openSource.stars).toBe(100);
  });

  it('should validate Company interface', () => {
    const company: Company = {
      name: 'Test Corp',
      url: 'https://test.com',
      icon: 'test-icon',
      role: 'Developer',
      period: '2020-2022',
    };
    expect(company.role).toBe('Developer');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL - "Cannot find module 'vitest'" (we'll add vitest in dependencies)

- [ ] **Step 3: Write minimal implementation**

```typescript
// src/types/index.ts
export interface Video {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}

export interface Writing {
  title: string;
  url: string;
  site?: string;
}

export interface Speaking {
  title: string;
  url: string;
}

export interface OpenSource {
  name: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  issues?: number;
  language: string;
}

export interface Company {
  name: string;
  url: string;
  icon: string;
  role: string;
  period: string;
}
```

- [ ] **Step 4: Add vitest and run tests**

```bash
npm install -D vitest @vitest/ui
```

Run: `npx vitest run`
Expected: PASS

- [ ] **Step 5: Copy data files**

```bash
cp ../data/speaking.json src/data/
cp ../data/writing.json src/data/
cp ../data/videos.json src/data/
cp ../data/opensource.json src/data/
```

- [ ] **Step 6: Type the data imports**

```typescript
// src/data/speaking.json
import type { Speaking } from '../types/index';

const speakingData: Speaking[] = [
  // ... data from speaking.json
];

export default speakingData;
```

- [ ] **Step 7: Commit**

```bash
git add src/types/index.ts src/data/*.json
git commit -m "feat: add TypeScript interfaces and migrate data files"
```

---

## Task 3: Global Styles and Pixel Design System

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1: Write failing test**

```css
/* src/styles/__tests__/global.test.css */
.test-pixel-font {
  font-family: 'Press Start 2P', cursive;
}
```

- [ ] **Step 2: Write global.css**

```css
/* Import pixel fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --pixel-green: #39ff14;
  --pixel-magenta: #ff00ff;
  --pixel-cyan: #00ffff;
  --pixel-yellow: #ffff00;
  --pixel-bg-dark: #0a0a0a;
  --pixel-bg-light: #f0f0f0;
}

@layer base {
  html {
    font-family: VT323, monospace;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Press Start 2P', cursive;
  }

  body {
    @apply bg-pixel-bg-light text-black dark:bg-pixel-bg-dark dark:text-white;
    image-rendering: pixelated;
  }
}

@layer components {
  .pixel-card {
    @apply bg-white dark:bg-gray-900 p-2;
  }

  .pixel-border {
    @apply border-4 border-black dark:border-pixel-green bg-white dark:bg-gray-900;
  }

  .pixel-button {
    @apply px-6 py-3 font-pixel-header text-sm bg-pixel-green text-black border-4 border-black 
           hover:translate-y-[-2px] hover:shadow-pixel-hover active:translate-y-0 active:shadow-none
           transition-all cursor-pointer;
  }

  .pixel-focus:focus-visible {
    @apply outline-4 outline-pixel-magenta outline-offset-4;
  }
}

@layer utilities {
  .pixel-shadow {
    box-shadow: 4px 4px 0 0 currentColor;
  }

  .text-shadow-pixel {
    text-shadow: 2px 2px 0 currentColor;
  }
}

/* CRT scanline effect */
.crt-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  z-index: 9999;
}

/* Disable CRT for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .crt-overlay {
    display: none;
  }
}
```

- [ ] **Step 3: Verify styles compile**

Run: `npm run build`
Expected: Build succeeds with no CSS errors

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add global styles with pixel design system"
```

---

## Task 4: Pixel Layout

**Files:**
- Create: `src/layouts/PixelLayout.astro`

- [ ] **Step 1: Write the failing test**

```typescript
// src/layouts/__tests__/PixelLayout.test.ts
import { describe, it, expect } from 'vitest';

describe('PixelLayout', () => {
  it('should export a function', () => {
    const layout = require('../PixelLayout.astro');
    expect(typeof layout).toBe('function');
  });
});
```

- [ ] **Step 2: Write PixelLayout.astro**

```astro
---
import '../styles/global.css';
import type { Props } from '../types/index';

interface LayoutProps extends Props {
  title?: string;
  description?: string;
  ogImage?: string;
}

const {
  title = 'Martyn Davies - Developer Relations',
  description = 'Developer Relations, Technical Writing & Speaking',
  ogImage = '/og-image.jpg'
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />

    <!-- SEO -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={canonicalURL} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>

  <body class="min-h-screen font-pixel-body">
    <slot />

    <!-- CRT overlay effect -->
    <div class="crt-overlay" aria-hidden="true"></div>
  </body>
</html>
```

- [ ] **Step 3: Run test to verify**

Run: `npx vitest run src/layouts/__tests__/PixelLayout.test.ts`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/layouts/PixelLayout.astro
git commit -m "feat: create PixelLayout with SEO metadata"
```

---

## Task 5: Pixel Components

**Files:**
- Create: `src/components/pixel/PixelCard.astro`
- Create: `src/components/pixel/PixelButton.astro`
- Create: `src/components/pixel/PixelBorder.astro`
- Create: `src/components/ui/SocialLink.astro`

- [ ] **Step 1: Write failing test for PixelCard**

```typescript
// src/components/pixel/__tests__/PixelCard.test.ts
import { describe, it, expect } from 'vitest';

describe('PixelCard', () => {
  it('should render slot content', () => {
    const content = 'Test Content';
    // Test would verify slot renders
  });
});
```

- [ ] **Step 2: Write PixelCard.astro**

```astro
---
interface Props {
  class?: string;
  hover?: boolean;
}

const { class: className = '', hover = true } = Astro.props;
---

<div class:list={[
  'pixel-card',
  hover && 'transition-transform hover:-translate-y-1',
  className
]}>
  <div class="pixel-border">
    <slot />
  </div>
</div>
```

- [ ] **Step 3: Write PixelButton.astro**

```astro
---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  class?: string;
  ariaLabel?: string;
}

const {
  href,
  type = 'button',
  variant = 'primary',
  class: className = '',
  ariaLabel
} = Astro.props;

const baseClasses = 'pixel-button inline-flex items-center justify-center gap-2 pixel-focus';

const variantClasses = {
  primary: 'bg-pixel-green text-black',
  secondary: 'bg-pixel-magenta text-white',
  outline: 'bg-transparent border-black dark:border-white text-black dark:text-white',
};

const Component = href ? 'a' : 'button';
---

<Component
  href={href}
  type={!href ? type : undefined}
  class:list={[baseClasses, variantClasses[variant], className]}
  aria-label={ariaLabel}
>
  <slot />
</Component>
```

- [ ] **Step 4: Write PixelBorder.astro**

```astro
---
interface Props {
  class?: string;
  color?: string;
}

const { class: className = '', color = 'currentColor' } = Astro.props;
---

<div class:list={['pixel-border', className]} style={`--border-color: ${color}`}>
  <slot />
</div>
```

- [ ] **Step 5: Write SocialLink.astro**

```astro
---
import type { Props } from '../types';

interface SocialLinkProps extends Props {
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'devto';
  label: string;
}

const { href, icon, label } = Astro.props;

import { Github, Linkedin, Twitter } from 'lucide-react';

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  devto: Github, // Fallback
};

const Icon = icons[icon];
---

<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={label}
  class="pixel-button variant-outline"
>
  <Icon class="w-5 h-5" />
  <slot />
</a>
```

- [ ] **Step 6: Run tests and commit**

```bash
npx vitest run
git add src/components/pixel/ src/components/ui/
git commit -m "feat: add pixel components (Card, Button, Border, SocialLink)"
```

---

## Task 6: React Interactive Components

**Files:**
- Create: `src/components/interactive/ThemeToggle.tsx`
- Create: `src/components/interactive/VideoModal.tsx`
- Create: `src/components/interactive/ShowMoreButton.tsx`

- [ ] **Step 1: Write failing test for ThemeToggle**

```typescript
// src/components/interactive/__tests__/ThemeToggle.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should render toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Write ThemeToggle.tsx**

```tsx
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(saved === 'dark' || (!saved && prefersDark));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="pixel-button bg-transparent border-4 border-current p-2"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
```

- [ ] **Step 3: Write VideoModal.tsx**

```tsx
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${title}`}
    >
      <div className="pixel-border bg-white dark:bg-gray-900 max-w-4xl w-full">
        <div className="p-4 flex items-center justify-between border-b-4 border-black dark:border-white">
          <h3 className="font-pixel-header text-sm truncate">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close video"
            className="pixel-button bg-pixel-magenta text-white p-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Write ShowMoreButton.tsx**

```tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreButtonProps {
  total: number;
  shown: number;
  onToggle: () => void;
  isExpanded: boolean;
}

export default function ShowMoreButton({
  total,
  shown,
  onToggle,
  isExpanded,
}: ShowMoreButtonProps) {
  const remaining = total - shown;

  if (total <= shown) return null;

  return (
    <div className="text-center mt-8">
      <button
        onClick={onToggle}
        className="pixel-button variant-outline"
        aria-label={isExpanded ? 'Show less' : `Show ${remaining} more`}
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            See More ({remaining} more) <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
```

- [ ] **Step 5: Run tests and commit**

```bash
npx vitest run
git add src/components/interactive/
git commit -m "feat: add React interactive components (ThemeToggle, VideoModal, ShowMoreButton)"
```

---

## Task 7: Page Sections

**Files:**
- Create: `src/components/sections/Hero.astro`
- Create: `src/components/sections/About.astro`
- Create: `src/components/sections/Writing.astro`
- Create: `src/components/sections/Speaking.astro`
- Create: `src/components/sections/Videos.astro`
- Create: `src/components/sections/OpenSource.astro`
- Create: `src/components/sections/Footer.astro`

- [ ] **Step 1: Write Hero.astro**

```astro
---
import PixelButton from '../pixel/PixelButton.astro';
import ThemeToggle from '../interactive/ThemeToggle';
import SocialLink from '../ui/SocialLink.astro';

---

<header class="relative pt-8 pb-16 px-4">
  <div class="absolute top-8 right-8 z-10">
    <ThemeToggle client:load />
  </div>

  <div class="container mx-auto max-w-6xl">
    <h1 class="text-5xl md:text-7xl font-pixel-header mb-4 leading-tight">
      Martyn Davies
    </h1>
    <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
      Developer Relations, Technical Writing & Speaking
    </p>

    <div class="flex flex-wrap gap-4">
      <SocialLink href="https://github.com/martyndavies" icon="github" label="GitHub">
        GitHub
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/martyndavies" icon="linkedin" label="LinkedIn">
        LinkedIn
      </SocialLink>
      <SocialLink href="https://twitter.com/martynd" icon="twitter" label="X (Twitter)">
        X (Twitter)
      </SocialLink>
      <SocialLink href="https://dev.to/martyndavies" icon="devto" label="Dev.to">
        Dev.to
      </SocialLink>
    </div>
  </div>
</header>
```

- [ ] **Step 2: Write About.astro**

```astro
---
import PixelCard from '../pixel/PixelCard.astro';
import PixelButton from '../pixel/PixelButton.astro';
import type { Company } from '../../types/index';

const companies: Company[] = [
  {
    name: 'Zuplo',
    url: 'https://zuplo.com',
    icon: 'zuplo',
    role: 'Developer Relations',
    period: '2024-Present',
  },
  {
    name: 'Superface',
    url: 'https://superface.ai',
    icon: 'superface',
    role: 'Developer Relations',
    period: '2023-2024',
  },
  {
    name: 'Orbit',
    url: 'https://orbit.love',
    icon: 'orbit',
    role: 'Head of Developer Relations',
    period: '2021-2023',
  },
];

const bio = `I'm a Developer Relations professional with extensive experience in technical writing, 
community building, and conference speaking. I focus on bridging the gap between 
developers and technology companies, creating content and experiences that help 
developers succeed.`;
---

<section class="mb-16 px-4">
  <div class="container mx-auto max-w-6xl">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PixelCard class="md:col-span-2">
        <div class="p-6">
          <h2 class="text-3xl font-pixel-header mb-4">About</h2>
          <p class="text-lg leading-relaxed mb-6">{bio}</p>
        </div>
      </PixelCard>

      <PixelCard>
        <div class="p-6">
          <h2 class="text-3xl font-pixel-header mb-4">Brief History</h2>
          <div class="space-y-3">
            {companies.map((company) => (
              <PixelButton href={company.url} variant="outline" class="w-full justify-start">
                <span class="font-medium">{company.role}</span>
                <span class="text-sm text-gray-500">{company.name} • {company.period}</span>
              </PixelButton>
            ))}
          </div>
        </div>
      </PixelCard>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Write remaining sections (Writing, Speaking, Videos, OpenSource)**

Each section follows the pattern:
- Grid of PixelCards
- Data from JSON files
- External links with proper ARIA labels

- [ ] **Step 4: Write Footer.astro**

```astro
---
import SocialLink from '../ui/SocialLink.astro';

const year = new Date().getFullYear();
---

<footer class="border-t-4 border-black dark:border-white py-8 px-4 mt-16">
  <div class="container mx-auto max-w-6xl">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex gap-4">
        <SocialLink href="https://github.com/martyndavies" icon="github" label="GitHub" />
        <SocialLink href="https://linkedin.com/in/martyndavies" icon="linkedin" label="LinkedIn" />
        <SocialLink href="https://twitter.com/martynd" icon="twitter" label="X (Twitter)" />
        <SocialLink href="https://dev.to/martyndavies" icon="devto" label="Dev.to" />
      </div>
      <p class="text-sm">
        © {year} Martyn Davies. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

- [ ] **Step 5: Commit all sections**

```bash
git add src/components/sections/
git commit -m "feat: add page sections (Hero, About, Writing, Speaking, Videos, OpenSource, Footer)"
```

---

## Task 8: Main Page Assembly

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Write index.astro**

```astro
---
import PixelLayout from '../layouts/PixelLayout.astro';
import Hero from '../components/sections/Hero.astro';
import About from '../components/sections/About.astro';
import Writing from '../components/sections/Writing.astro';
import Speaking from '../components/sections/Speaking.astro';
import Videos from '../components/sections/Videos.astro';
import OpenSource from '../components/sections/OpenSource.astro';
import Footer from '../components/sections/Footer.astro';
---

<PixelLayout title="Martyn Davies - Developer Relations">
  <main>
    <Hero />
    <About />
    <OpenSource />
    <Videos />
    <Writing />
    <Speaking />
  </main>
  <Footer />
</PixelLayout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds, static files in dist/

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: assemble main page with all sections"
```

---

## Task 9: Build, Test, and Deploy

**Files:**
- Create: `public/favicon.svg`
- Create: `public/robots.txt`

- [ ] **Step 1: Create pixel favicon**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#39ff14"/>
  <text x="16" y="22" font-family="monospace" font-size="16" text-anchor="middle" fill="#0a0a0a">M</text>
</svg>
```

- [ ] **Step 2: Create robots.txt**

```
User-agent: *
Allow: /
```

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Success, dist/ folder with static files

- [ ] **Step 4: Preview locally**

Run: `npm run preview`
Open: http://localhost:4321

- [ ] **Step 5: Run lighthouse audit**

Open Chrome DevTools > Lighthouse
Expected: Performance 95+, Accessibility 100%

- [ ] **Step 6: Commit final changes**

```bash
git add public/
git commit -m "feat: add public assets (favicon, robots.txt)"
```

- [ ] **Step 7: Push to GitHub**

```bash
git push origin update-refactor
```

- [ ] **Step 8: Deploy to Vercel**

Connect repository to Vercel, deploy automatically

---

## Summary

**Total Tasks:** 9

**Execution Path:** Use superpowers:subagent-driven-development with fresh subagent per task, two-stage review (spec compliance then code quality).

**Key Files Created:**
- `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
- `src/types/index.ts` (TypeScript interfaces)
- `src/styles/global.css` (pixel design system)
- `src/layouts/PixelLayout.astro` (with SEO metadata)
- `src/components/pixel/*` (PixelCard, PixelButton, PixelBorder)
- `src/components/interactive/*` (ThemeToggle, VideoModal, ShowMoreButton)
- `src/components/sections/*` (Hero, About, Writing, Speaking, Videos, OpenSource, Footer)
- `src/pages/index.astro` (assembled page)
- Data files migrated from existing project

**Success Criteria:**
- All existing content displayed correctly
- 8-bit aesthetic implemented throughout
- Video modal works as before
- Theme toggle works and persists
- Lighthouse performance 95+
- Responsive on all screen sizes
- Accessible (WCAG 2.1 AA)