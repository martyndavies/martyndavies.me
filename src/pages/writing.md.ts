import type { APIRoute } from 'astro'
import { writing } from '@/data/writing'

export const GET: APIRoute = () => {
  const lines = [
    '# Writing — Martyn Davies',
    '',
    'Articles and posts written by Martyn Davies across Zuplo, Nexmo, SendGrid, and dev.to.',
    '',
    ...writing.map(item => {
      const date = item.date ? ` (${item.date})` : ''
      return `- [${item.title}](${item.url}) — ${item.site}${date}`
    }),
    '',
    '---',
    'Source: https://martyndavies.me/writing',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
