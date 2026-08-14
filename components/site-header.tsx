import Link from 'next/link'

import ExternalLink from './external-link'
import { GIT_REPO, PERSONAL_SITE_URL } from '../lib/constants'

const SiteHeader: React.FC = () => {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="wordmark">
          Caulagi
        </Link>
        <nav className="site-nav">
          <ExternalLink href={PERSONAL_SITE_URL}>caulagi.com</ExternalLink>
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
