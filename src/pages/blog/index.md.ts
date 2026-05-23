import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  const lines = [
    '# Blog — Martyn Davies',
    '',
    'Thoughts on developer advocacy, tooling, and the evolving relationship between developers and the products they use.',
    '',
    ...posts.map(p => `- [${p.data.title}](https://martyndavies.me/blog/${p.id.replace(/\.md$/, '')}) — ${p.data.date}`),
    '',
    '---',
    'Source: https://martyndavies.me/blog',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
