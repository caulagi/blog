import { AppProps } from 'next/app'
import '../styles/index.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
