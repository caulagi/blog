import { join } from 'path'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import fs from 'fs'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import Head from 'next/head'
import matter from 'gray-matter'

import { AUTHOR_NAME } from '../../lib/constants'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import PostType from '../../types/post'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface PostProps {
  post: PostType
  source: MDXRemoteSerializeResult
  morePosts: PostType[]
}

const Post: React.FC<PostProps> = ({ post, source }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="prose lg:prose-xl">
              <Head>
                <title>{`post.title` + ' | Blog of ' + AUTHOR_NAME}</title>
                <meta
                  property="og:image"
                  content={post.ogImage.url}
                  key="ogImage"
                />
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
                <meta
                  name="twitter:title"
                  content={post.title}
                  key="twitterTitle"
                />
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
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css"
                  integrity="sha512-XZoe1WroNfbcndQJexn+pbMEytiaSYRHDuKjew+Nn0xYSTmB4sfoZnBdqYCrXq2IwAcPZS/sXE5ju/JbppYOsA=="
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody source={source} />
            </article>
          </>
        )}
      </Container>
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
  ])
  const postsDirectory = join(process.cwd(), '_posts')
  const postFilePath = path.join(postsDirectory, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      rehypePlugins: [],
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
