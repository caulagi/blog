import fs from 'fs'
import path, { join } from 'path'

import Head from 'next/head'
import Link from 'next/link'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import ContactCard from '../../components/contact-card'
import CoverImage from '../../components/cover-image'
import DateFormatter from '../../components/date-formatter'
import Layout from '../../components/layout'
import PostBody from '../../components/post-body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import codeTheme from '../../lib/code-theme'
import { AUTHOR_NAME, AUTHOR_PICTURE } from '../../lib/constants'
import rehypeCodeCard from '../../lib/rehype-code-card'
import PostType from '../../types/post'

interface PostProps {
  post: PostType
  source: MDXRemoteSerializeResult
}

const Post: React.FC<PostProps> = ({ post, source }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    return (
      <Layout>
        <header className="post-header">
          <h1>Loading…</h1>
        </header>
      </Layout>
    )
  }

  const tags = post.tags ?? []
  return (
    <Layout description={post.excerpt}>
      <Head>
        <title>{post.title + ' | Blog of ' + AUTHOR_NAME}</title>
        <meta property="og:image" content={post.ogImage.url} key="ogImage" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} key="ogTitle" />
        <meta
          property="og:description"
          content={post.excerpt}
          key="ogDescription"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@blog.caulagi.com" />
        <meta name="twitter:creator" content="@caulagi" />
        <meta name="twitter:title" content={post.title} key="twitterTitle" />
        <meta
          name="twitter:description"
          content={post.excerpt}
          key="twitterDescription"
        />
        <meta
          name="twitter:image"
          content={post.ogImage.url}
          key="twitterImage"
        />
      </Head>

      <article>
        <header className="post-header">
          <Link href="/" className="back-link">
            ← All posts
          </Link>
          <div className="meta-row">
            <span className="accent">
              <DateFormatter dateString={post.date} />
            </span>
            {tags.length > 0 && <span>{tags.join(' · ')}</span>}
          </div>
          <h1>{post.title}</h1>
          <p className="post-lede">{post.excerpt}</p>
          <div className="byline">
            <img src={AUTHOR_PICTURE} alt={AUTHOR_NAME} />
            <span>{AUTHOR_NAME}</span>
          </div>
        </header>

        <div className="post-cover">
          <CoverImage title={post.title} image={post.coverImage} />
          {post.coverImage.authorName && (
            <p className="credit">
              Photo by{' '}
              {post.coverImage.authorUrl ? (
                <a
                  href={post.coverImage.authorUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.coverImage.authorName}
                </a>
              ) : (
                post.coverImage.authorName
              )}
            </p>
          )}
        </div>

        <PostBody source={source} />
        <ContactCard />
      </article>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ])
  const postsDirectory = join(process.cwd(), '_posts')
  const postFilePath = path.join(postsDirectory, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: codeTheme,
            keepBackground: false,
            defaultLang: 'text',
          },
        ],
        rehypeCodeCard,
      ],
    },
    scope: data,
  })

  return {
    props: {
      post: {
        ...post,
      },
      source: mdxSource,
    },
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
