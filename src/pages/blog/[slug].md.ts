import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog')
  return posts
    .filter(p => !p.data.draft)
    .map(post => ({ params: { slug: post.id.replace(/\.md$/, '') }, props: { post } }))
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as Awaited<ReturnType<typeof getStaticPaths>>[number]['props']
  const lines = [
    `# ${post.data.title}`,
    '',
    `Date: ${post.data.date}`,
    '',
    post.data.excerpt,
    '',
    '---',
    '',
    post.body ?? '',
    '',
    '---',
    `Source: https://martyndavies.me/blog/${post.id}`,
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
