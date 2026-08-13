import type { ReactNode } from 'react'

import ContactCard from './contact-card'
import YoutubeEmbed from './youtube-embed'

interface PullQuoteProps {
  cite?: string
  children: ReactNode
}

// Cited block quote, set apart from the running text.
export const PullQuote: React.FC<PullQuoteProps> = ({ cite, children }) => (
  <figure className="pull-quote">
    <span className="mark" aria-hidden="true">
      &ldquo;
    </span>
    <p>{children}</p>
    {cite && <figcaption>— {cite}</figcaption>}
  </figure>
)

interface QuotationProps {
  author: string
  quotation: string
  reference?: string
}

// Older posts use <Quotation author quotation reference /> — same card, named props.
export const Quotation: React.FC<QuotationProps> = ({
  author,
  quotation,
  reference,
}) => (
  <PullQuote cite={[author, reference].filter(Boolean).join(', ')}>
    {quotation}
  </PullQuote>
)

export const Caption: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="caption">{children}</p>
)

// Older posts use <Code>foo</Code> where `foo` would do.
export const Code: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => (
  <code {...props} />
)

const mdxComponents = {
  Caption,
  Code,
  Contact: ContactCard,
  PullQuote,
  Quotation,
  YoutubeEmbed,
}

export default mdxComponents
