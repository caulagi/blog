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
        <a href={MASTODON_URL} rel="me noreferrer" target="_blank">
          Mastodon
        </a>{' '}
        ·{' '}
        <a href={LINKEDIN_URL} rel="me noreferrer" target="_blank">
          LinkedIn
        </a>{' '}
        ·{' '}
        <a href={GIT_REPO} target="_blank" rel="noreferrer">
          Source
        </a>
      </span>
    </footer>
  )
}

export default SiteFooter
