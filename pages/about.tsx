import Head from 'next/head'

import ContactCard from '../components/contact-card'
import Layout from '../components/layout'
import {
  AUTHOR_NAME,
  AUTHOR_PICTURE,
  HOME_OG_IMAGE_URL,
} from '../lib/constants'

const lede =
  'Developer and platform engineer. Interested in distributed systems.'

const facts = [
  { label: 'Languages', value: 'Python · Go · Rust' },
  { label: 'Curious about', value: 'Kubernetes · WASM · Nix' },
  { label: 'Off the clock', value: 'Chess · long walks' },
]

const About: React.FC = () => {
  const title = `About ${AUTHOR_NAME}`
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} key="ogTitle" />
        <meta property="og:description" content={lede} key="ogDescription" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@blog.caulagi.com" />
        <meta name="twitter:creator" content="@caulagi" />
        <meta name="twitter:title" content={title} key="twitterTitle" />
        <meta
          name="twitter:description"
          content={lede}
          key="twitterDescription"
        />
        <meta
          name="twitter:image"
          content={HOME_OG_IMAGE_URL}
          key="twitterImage"
        />
      </Head>

      <header className="about-head">
        <div>
          <h1>About Me</h1>
          <p className="lede">{lede}</p>
        </div>
        <img className="about-photo" src={AUTHOR_PICTURE} alt={AUTHOR_NAME} />
      </header>

      <div className="about-body prose-blog">
        <p>
          Hi 👋. I am proficient with Python, Golang and Rust — my code is
          idiomatic, well tested and performs well. In devops-ish roles I have
          run production systems and helped other developers daily; in developer
          roles I have built and maintained backend APIs and gRPC services.
        </p>
        <p>
          I have worked with startups, mid-size and large companies, and I am
          active on GitHub and contribute to open source. These days the things
          I keep poking at are Kubernetes, WASM and Nix. I fit the roles of
          platform or systems developer.
        </p>
        <p>
          Outside of work I have two kids and a girlfriend. I spend my time
          watching and playing chess, listening to music (ask me about Indian
          classical) and, recently, taking long walks.
        </p>
      </div>

      <div className="facts">
        {facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <div className="fact-label">{fact.label}</div>
            <div className="fact-value">{fact.value}</div>
          </div>
        ))}
      </div>

      <ContactCard />
    </Layout>
  )
}

export default About
