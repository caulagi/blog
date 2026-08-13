import { AUTHOR_NAME, GIT_REPO, MASTODON_URL } from '../lib/constants'

const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {AUTHOR_NAME}
      </span>
      <span>
        <a href="/feed.xml">RSS</a> ·{' '}
        <a href={MASTODON_URL} rel="me noreferrer" target="_blank">
          Mastodon
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
