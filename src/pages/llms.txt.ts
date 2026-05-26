import type { APIRoute } from 'astro'
import { writing } from '@/data/writing'
import { videos } from '@/data/videos'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  const lines = [
    '# Martyn Davies — martyndavies.me',
    '',
    '> Multi-year experience leading Developer Advocacy, Education, Community Management, and Product Management at companies large and small.',
    '',
    '## Site',
    '',
    '- Home: https://martyndavies.me/',
    '- Writing: https://martyndavies.me/writing',
    '- Videos: https://martyndavies.me/videos',
    '- Blog: https://martyndavies.me/blog',
    '- About: https://martyndavies.me/about',
    '- Contact: https://martyndavies.me/contact',
    '',
    '## Content negotiation',
    '',
    'Every HTML page on this site links to an alternate plain-text Markdown version via `<link rel="alternate" type="text/markdown">`. The Markdown URLs follow the pattern of appending `.md` to the page path.',
    '',
    '## Machine-readable pages',
    '',
    '- https://martyndavies.me/index.md',
    '- https://martyndavies.me/writing.md',
    '- https://martyndavies.me/videos.md',
    '- https://martyndavies.me/blog/index.md',
    '- https://martyndavies.me/about.md',
    '- https://martyndavies.me/contact.md',
    ...posts.map(p => `- https://martyndavies.me/blog/${p.id.replace(/\.md$/, '')}.md`),
    '',
    '## Blog posts',
    '',
    ...posts.map(p => `- [${p.data.title}](https://martyndavies.me/blog/${p.id.replace(/\.md$/, '')}) — ${p.data.date}`),
    '',
    '## Recent articles',
    '',
    ...writing.slice(0, 5).map(item => `- [${item.title}](${item.url}) — ${item.site}`),
    '',
    '## Social',
    '',
    '- GitHub: https://github.com/martyndavies',
    '- LinkedIn: https://linkedin.com/in/martynrdavies',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
