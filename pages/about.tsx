import Container from '../components/container'
import Header from '../components/header'
import Avatar from '../components/avatar'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { AUTHOR_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const intro = `
I am an experienced developer/problem-solver interested in distributed
systems. I have spent many years working with web applications. I am
good at Python and Golang and comfortable with Rust. My code is
idiomatic, well tested and performs well. I have worked with startups,
mid-size and large companies. I am active on github and have contributed
to open source projects. I have worked on legacy solutions and improved
them. I enjoy working with Kubernetes and Rust. I will fit the roles of
platform/systems developer.`

const aboutMe = () => {
  return (
    <div>
      <p>{intro}</p>
      <p>
        Outside of work, I have 2 kids and spend my time watching/playing chess,
        listening to music (ask me about Indian classical) and recently, taking
        long walks.
      </p>
      <p>
        Feel free to contact me via caulagi AT gmail DOT com or a DM on{' '}
        <Link href="https://twitter.com/caulagi">
          <a className="hover:underline text-black">twitter</a>
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
