import { GetServerSideProps } from 'next'

import { getAllPosts } from '../lib/api'
import {
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  EMAIL,
} from '../lib/constants'

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const buildFeed = (): string => {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt'])
  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/posts/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog of ${escapeXml(AUTHOR_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <managingEditor>${EMAIL} (${escapeXml(AUTHOR_NAME)})</managingEditor>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
}

// The page itself never renders — getServerSideProps writes the XML directly.
const Feed: React.FC = () => null

export default Feed

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400',
  )
  res.write(buildFeed())
  res.end()

  return { props: {} }
}
