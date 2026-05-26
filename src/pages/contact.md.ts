import type { APIRoute } from 'astro'
import { links } from '@/data/contact'

export const GET: APIRoute = () => {
  const content = [
    '# Contact — Martyn Davies',
    '',
    ...links.map(link => `- ${link.label}: ${link.url}`),
    '',
    '---',
    'Source: https://martyndavies.me/contact',
  ].join('\n')

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
