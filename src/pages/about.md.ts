import type { APIRoute } from 'astro'
import { experience, focusAreas } from '@/data/about'

export const GET: APIRoute = () => {
  const lines = [
    '# About — Martyn Davies',
    '',
    'Multi-year experience leading Developer Advocacy, Education, Community Management, and Product Management at companies large and small. I\'ve been building, leading and enjoying being a part of forward-thinking advocacy teams from 1 person to 40+ since 2012.',
    '',
    '## Experience',
    '',
    ...experience.flatMap(entry => {
      return entry.roles.map(role => [
        `### ${entry.company} — ${role.title}`,
        role.period,
        role.description || '',
        '',
      ]).flat()
    }),
    '## Focus Areas',
    '',
    ...focusAreas.map(area => `- ${area}`),
    '',
    '---',
    'Source: https://martyndavies.me/about',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
