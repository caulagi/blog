import Container from '../components/container'
import Header from '../components/header'
import Avatar from '../components/avatar'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { AUTHOR_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const intro = `
I am Pradip Caulagi. I am an experienced developer and platform engineer.
I am interested in distributed systems.
I am proficient with Python, Golang and Rust. My code is
idiomatic, well tested and performs well.
In my devopsy roles, I have managed production systems and
helped other developers/team members daily.
In my developer roles, I have built and maitained backend APIs and grpc services.
I have worked with startups, mid-size and large companies.
I am active on github and have contributed to open source projects.
I enjoy working with Kubernetes and Rust.
I will fit the roles of platform/systems developer.`

const aboutMe = () => {
  return (
    <div>
      <p>Hi 👋!</p>
      <p>{intro}</p>
      <p>
        Outside of work, I have 2 kids and spend my time watching/playing chess,
        listening to music (ask me about Indian classical) and recently, taking
        long walks.
      </p>
      <p>
        Feel free to contact me via caulagi AT gmail DOT com or on{' '}
        <Link
          rel="me"
          href="https://mastodon.social/@caulagi"
          className="hover:underline text-black"
          target="_blank"
        >
          mastodon
        </Link>
        .
      </p>
    </div>
  )
}

const Post: React.FC = () => {
  const title = `About ${AUTHOR_NAME}`
  return (
    <Layout>
      <Container>
        <Header />
        <article className="prose lg:prose-xl">
          <Head>
            <title>{title}</title>
            <meta
              property="og:image"
              content={HOME_OG_IMAGE_URL}
              key="ogImage"
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} key="ogTitle" />
            <meta
              property="og:description"
              content={intro}
              key="ogDescription"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@blog.caulagi.com" />
            <meta name="twitter:creator" content="@caulagi" />
            <meta name="twitter:title" content={title} key="twitterTitle" />
            <meta
              name="twitter:description"
              content={intro}
              key="twitterDescription"
            />
            <meta
              name="twitter:image"
              content={HOME_OG_IMAGE_URL}
              key="twitterImage"
            />
          </Head>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
            About Me
          </h1>
          <div className="flex justify-center md:justify">
            <Avatar />
          </div>
          {aboutMe()}
        </article>
      </Container>
    </Layout>
  )
}

export default Post
