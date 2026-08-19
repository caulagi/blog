import Head from 'next/head'
import { GetStaticProps } from 'next'

import FeaturedPost from '../components/featured-post'
import Layout from '../components/layout'
import PostRow from '../components/post-row'
import { getAllPosts } from '../lib/api'
import { AUTHOR_NAME } from '../lib/constants'
import Post from '../types/post'

interface IndexProps {
  allPosts: Post[]
}

const Index: React.FC<IndexProps> = ({ allPosts }) => {
  const [featured, ...rest] = allPosts
  return (
    <Layout>
      <Head>
        <title>{'Blog of ' + AUTHOR_NAME}</title>
      </Head>

      <section className="masthead">
        <p className="eyebrow">Blog of {AUTHOR_NAME}</p>
        <h1>Notes on distributed systems and the tools in between.</h1>
        <p>
          Python, Go and Rust for the code; Kubernetes, Terraform and Google
          Cloud for everything around it. I've broken most of it at least once —
          that's where these notes come from.
        </p>
      </section>

      {featured && (
        <FeaturedPost
          title={featured.title}
          coverImage={featured.coverImage}
          date={featured.date}
          slug={featured.slug}
          excerpt={featured.excerpt}
          tags={featured.tags}
        />
      )}

      {rest.length > 0 && (
        <section>
          <div className="section-label">
            <span>Earlier</span>
            <span />
          </div>
          {rest.map((post) => (
            <PostRow
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          ))}
        </section>
      )}

      <section className="rss-card">
        <div>
          <h4>New posts, straight to your reader.</h4>
          <p>No newsletter, no tracking — just a feed.</p>
        </div>
        <a className="btn-solid" href="/feed.xml">
          Subscribe via RSS
        </a>
      </section>
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}
