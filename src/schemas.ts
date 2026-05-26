import type { CollectionEntry } from 'astro:content'
import { getThumbnailUrl } from '@/data/videos'
import type { VideoItem } from '@/data/videos'

const SITE_URL = 'https://martyndavies.me'
const PERSON_ID = `${SITE_URL}/#person`

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Martyn Davies',
  url: SITE_URL,
  jobTitle: 'Builder Relations Lead',
  description: 'Developer education, community, and API products.',
  sameAs: [
    'https://twitter.com/martyndavies',
    'https://www.linkedin.com/in/martynrdavies/',
    'https://github.com/martyndavies',
    'https://www.youtube.com/@martyndavies',
  ],
}

export function webSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Martyn Davies',
    url: SITE_URL,
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    ...person,
  }
}

export function profilePage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@id': PERSON_ID,
    },
  }
}

export function blog(posts: CollectionEntry<'blog'>[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog',
    description: "Martyn Davies' blog on developer advocacy, API products, and community.",
    url: `${SITE_URL}/blog`,
    author: {
      '@id': PERSON_ID,
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.data.title,
      datePublished: post.data.date,
      url: `${SITE_URL}/blog/${post.id.replace(/\.md$/, '')}`,
    })),
  }
}

export function blogPosting(post: CollectionEntry<'blog'>) {
  const url = `${SITE_URL}/blog/${post.id.replace(/\.md$/, '')}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.excerpt,
    url,
    image: `${SITE_URL}/og-default.png`,
    datePublished: post.data.date,
    author: {
      '@id': PERSON_ID,
    },
    publisher: {
      '@id': PERSON_ID,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function collectionPage(name: string, description: string, urlPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_URL}${urlPath}`,
    author: {
      '@id': PERSON_ID,
    },
  }
}

export function videoObject(video: VideoItem) {
  const obj: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    contentUrl: video.url,
  }

  if (video.date) {
    obj.uploadDate = video.date
  }

  const thumbnail = getThumbnailUrl(video.url)
  if (thumbnail) {
    obj.thumbnailUrl = thumbnail
  }

  return obj
}

export function contactPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@id': PERSON_ID,
    },
  }
}

export function breadcrumb(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      }
      if (item.url) {
        entry.item = `${SITE_URL}${item.url}`
      }
      return entry
    }),
  }
}
