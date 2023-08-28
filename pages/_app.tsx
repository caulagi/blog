import { AppProps } from 'next/app'
import '../styles/index.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextUIProvider } from '@nextui-org/react'
import * as gtag from '../lib/gtag'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
