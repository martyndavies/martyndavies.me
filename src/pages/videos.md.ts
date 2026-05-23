import type { APIRoute } from 'astro'
import { videos } from '@/data/videos'

export const GET: APIRoute = () => {
  const lines = [
    '# Videos — Martyn Davies',
    '',
    'A curated selection of talks, demos, and recordings.',
    '',
    ...videos.map(item => {
      const date = item.date ? ` (${item.date})` : ''
      return `- [${item.title}](${item.url}) — ${item.channel}${date}`
    }),
    '',
    '---',
    'Source: https://martyndavies.me/videos',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
