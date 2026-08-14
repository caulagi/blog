type ExternalLinkProps = {
  href: string
  rel?: string
  children: React.ReactNode
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, rel, children }) => (
  <a href={href} target="_blank" rel={rel ? `${rel} noreferrer` : 'noreferrer'}>
    {children}
    <span className="external-arrow" aria-hidden="true">
      ↗
    </span>
    <span className="visually-hidden"> (opens in a new window)</span>
  </a>
)

export default ExternalLink
