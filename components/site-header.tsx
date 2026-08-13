import Link from 'next/link'

import { GIT_REPO } from '../lib/constants'

const SiteHeader: React.FC = () => {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="wordmark">
          Caulagi
        </Link>
        <nav className="site-nav">
          <Link href="/">Posts</Link>
          <Link href="/about">About</Link>
          <a href={GIT_REPO} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>
      <div className="header-rule" />
    </>
  )
}

export default SiteHeader
