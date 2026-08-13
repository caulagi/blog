import { EMAIL, MASTODON_URL } from '../lib/constants'

const ContactCard: React.FC = () => {
  return (
    <div className="contact-card">
      <span className="contact-badge" aria-hidden="true">
        🐢
      </span>
      <p>Happy to hear your thoughts — disagreements especially.</p>
      <div className="contact-links">
        <a href={`mailto:${EMAIL}`}>
          <span className="emoji" aria-hidden="true">
            📮
          </span>{' '}
          caulagi AT gmail DOT com
        </a>
        <a href={MASTODON_URL} rel="me noreferrer" target="_blank">
          <span className="emoji" aria-hidden="true">
            🦣
          </span>{' '}
          mastodon.social/@caulagi
        </a>
      </div>
    </div>
  )
}

export default ContactCard
