import ExternalLink from './external-link'
import {
  AUTHOR_NAME,
  GIT_REPO,
  LINKEDIN_URL,
  MASTODON_URL,
  PERSONAL_SITE_URL,
} from '../lib/constants'

const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {AUTHOR_NAME}
      </span>
      <span>
        <ExternalLink href={PERSONAL_SITE_URL}>caulagi.com</ExternalLink> ·{' '}
        <a href="/feed.xml">RSS</a> ·{' '}
        <ExternalLink href={MASTODON_URL} rel="me">
          Mastodon
        </ExternalLink>{' '}
        ·{' '}
        <ExternalLink href={LINKEDIN_URL} rel="me">
          LinkedIn
        </ExternalLink>{' '}
        · <ExternalLink href={GIT_REPO}>Source</ExternalLink>
      </span>
    </footer>
  )
}

export default SiteFooter
