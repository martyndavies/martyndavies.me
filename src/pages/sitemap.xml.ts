import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

const SITE = import.meta.env.SITE || 'https://martyndavies.me'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function urlEntry(loc: string, lastmod?: string) {
  let entry = `  <url>\n    <loc>${escapeXml(loc)}</loc>\n`
  if (lastmod) {
    entry += `    <lastmod>${lastmod}</lastmod>\n`
  }
  entry += `  </url>\n`
  return entry
}

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  const today = new Date().toISOString().split('T')[0]

  const urls = [
    urlEntry(`${SITE}/`, today),
    urlEntry(`${SITE}/about`, today),
    urlEntry(`${SITE}/blog`, today),
    urlEntry(`${SITE}/writing`, today),
    urlEntry(`${SITE}/videos`, today),
    urlEntry(`${SITE}/contact`, today),
    ...posts.map(post => {
      const slug = post.id.replace(/\.md$/, '')
      const date = new Date(post.data.date).toISOString().split('T')[0]
      return urlEntry(`${SITE}/blog/${slug}`, date)
    }),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('')}</urlset>\n`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
