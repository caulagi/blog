import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  AUTHOR_NAME,
  HOME_OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_URL,
} from '../lib/constants'

type MetaProps = {
  description?: string
}

const Meta: React.FC<MetaProps> = ({ description = SITE_DESCRIPTION }) => {
  const { asPath } = useRouter()
  // Query strings and fragments are never part of the canonical URL.
  const canonical = SITE_URL + asPath.split(/[?#]/)[0]
  return (
    <Head>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} key="ogUrl" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fbf8f3" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`Blog of ${AUTHOR_NAME}`}
        href="/feed.xml"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />
    </Head>
  )
}

export default Meta
