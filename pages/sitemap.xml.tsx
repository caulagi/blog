import { GetServerSideProps } from 'next'

import { getAllPosts } from '../lib/api'
import { SITE_URL } from '../lib/constants'

const buildSitemap = (): string => {
  const posts = getAllPosts(['slug', 'date'])
  const newest = posts[0]?.date

  const urls = [
    // Trailing slash to match the canonical the home page emits.
    { loc: `${SITE_URL}/`, lastmod: newest },
    { loc: `${SITE_URL}/about`, lastmod: undefined },
    ...posts.map((post) => ({
      loc: `${SITE_URL}/posts/${post.slug}`,
      lastmod: post.date,
    })),
  ]

  const entries = urls
    .map(({ loc, lastmod }) => {
      const date = lastmod
        ? `\n    <lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>`
        : ''
      return `  <url>\n    <loc>${loc}</loc>${date}\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`
}

// The page itself never renders — getServerSideProps writes the XML directly.
const Sitemap: React.FC = () => null

export default Sitemap

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400',
  )
  res.write(buildSitemap())
  res.end()

  return { props: {} }
}
