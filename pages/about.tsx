import Head from 'next/head'

import ContactCard from '../components/contact-card'
import JsonLd from '../components/json-ld'
import Layout from '../components/layout'
import {
  AUTHOR_NAME,
  AUTHOR_PICTURE,
  SAME_AS,
  SITE_URL,
} from '../lib/constants'

const lede =
  'Developer and platform engineer. Has been confidently wrong in three languages.'

const facts = [
  { label: 'Languages', value: 'Python · Go · Rust' },
  { label: 'Curious about', value: 'Kubernetes · WASM · Nix' },
  { label: 'Off the clock', value: 'Chess · long walks' },
]

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  description: lede,
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}${AUTHOR_PICTURE}`,
  jobTitle: 'Platform engineer',
  knowsAbout: [
    'Distributed systems',
    'Platform engineering',
    'Python',
    'Go',
    'Rust',
    'Kubernetes',
  ],
  sameAs: SAME_AS,
}

const About: React.FC = () => {
  const title = `About ${AUTHOR_NAME}`
  return (
    <Layout description={lede}>
      <JsonLd data={person} />
      <Head>
        <title>{title}</title>
        <meta property="og:type" content="profile" key="ogType" />
        <meta property="og:title" content={title} key="ogTitle" />
        <meta property="og:description" content={lede} key="ogDescription" />
        <meta name="twitter:title" content={title} key="twitterTitle" />
        <meta
          name="twitter:description"
          content={lede}
          key="twitterDescription"
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
          Hi 👋, I'm Pradip Caulagi. I build backend APIs and gRPC services in
          Python, Go and Rust. I've been confidently wrong in all three, which
          is how I eventually learned to write any of them properly.
        </p>
        <p>
          The rest is platform work — Kubernetes, Terraform, Google Cloud,
          keeping production honest and other developers moving. I've done it at
          startups, at mid-size companies and inside large ones; the dashboards
          get fancier, but the problems stay familiar. Right now I'm poking at
          Kubernetes internals, WASM and Nix, and some of it ends up open source
          on GitHub.
        </p>
        <p>
          Off the clock there are two kids and a girlfriend, a chess habit I
          defend as &ldquo;pattern recognition practice&rdquo;, Indian classical
          music I will absolutely over-explain, and long walks, still my best
          debugging tool.
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
