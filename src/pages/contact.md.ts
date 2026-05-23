import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const content = `# Contact — Martyn Davies

- GitHub: https://github.com/martyndavies
- LinkedIn: https://linkedin.com/in/martynrdavies

---
Source: https://martyndavies.me/contact`

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
