import Container from '../components/container'
import Header from '../components/header'
import Avatar from '../components/avatar'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const aboutMe = () => {
  return (
    <div>
      <p>
        I am an experienced developer interested in distributed systems. I have
        spent 15+ years working with web applications. My goto language is
        Python but I have been influenced and can read several other languages.
        My code is idiomatic, well tested and performs well. I have worked with
        startups, mid-size and large companies. I am active on github and have
        contributed to open source projects. I enjoy working with Kubernetes and
        Rust &#128521;. I would probably fit the roles of - platform/site
        reliability/backend engineer.
      </p>

      <p>
        Outside of work, I have 2 kids and spend my time watching/playing chess,
        listening to music (ask me about Indian classical) and recently, taking
        long walks.
      </p>

      <p>
        Feel free to send me an email: caulagi AT gmail DOT com or on{' '}
        <Link href="https://twitter.com/caulagi">
          <a className="hover:underline text-black">twitter</a>
        </Link>
        .
      </p>
    </div>
  )
}

const Post: React.FC = () => {
  const title = `About {AUTHOR_NAME}`
  return (
    <Layout>
      <Container>
        <Header />
        <>
          <article className="prose lg:prose-xl">
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={HOME_OG_IMAGE_URL} />
            </Head>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
              About Me
            </h1>
            <div className="flex justify-center md:justify">
              <Avatar />
            </div>
            {aboutMe()}
          </article>
        </>
      </Container>
    </Layout>
  )
}

export default Post
