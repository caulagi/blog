import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_URL,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_URL,
  TWITTER_HANDLE,
} from '../lib/constants'

type MetaProps = {
  description?: string
  image?: string
}

const Meta: React.FC<MetaProps> = ({
  description = SITE_DESCRIPTION,
  image,
}) => {
  const { asPath } = useRouter()
  // Query strings and fragments are never part of the canonical URL.
  const canonical = SITE_URL + asPath.split(/[?#]/)[0]
  // Dimensions are only declared for the card we ship — we don't know the
  // size of a post's cover image.
  const usingDefaultImage = !image
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
      <meta property="og:site_name" content={`Blog of ${AUTHOR_NAME}`} />
      <meta property="og:type" content="website" key="ogType" />
      <meta
        property="og:image"
        content={image ?? DEFAULT_OG_IMAGE_URL}
        key="ogImage"
      />
      {usingDefaultImage && (
        <meta
          property="og:image:width"
          content={DEFAULT_OG_IMAGE_WIDTH}
          key="ogImageWidth"
        />
      )}
      {usingDefaultImage && (
        <meta
          property="og:image:height"
          content={DEFAULT_OG_IMAGE_HEIGHT}
          key="ogImageHeight"
        />
      )}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitterCard"
      />
      <meta name="twitter:site" content={TWITTER_HANDLE} key="twitterSite" />
      <meta
        name="twitter:creator"
        content={TWITTER_HANDLE}
        key="twitterCreator"
      />
      <meta
        name="twitter:image"
        content={image ?? DEFAULT_OG_IMAGE_URL}
        key="twitterImage"
      />
    </Head>
  )
}

export default Meta
