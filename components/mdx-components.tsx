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
    <div className="quote">{children}</div>
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

// Wrap a markdown list to render it as numbered 01/02/03 rows.
// `long` for paragraph-length items that lead with **A short title.**
export const NumberedList: React.FC<{
  long?: boolean
  children: ReactNode
}> = ({ long, children }) => (
  <div className={long ? 'num-list num-list--long' : 'num-list'}>
    {children}
  </div>
)

// Side-by-side definitions: <Terms><Term name="…">…</Term></Terms>
export const Terms: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="terms">{children}</div>
)

export const Term: React.FC<{ name: string; children: ReactNode }> = ({
  name,
  children,
}) => (
  <div className="term">
    <code>{name}</code>
    <div className="body">{children}</div>
  </div>
)

export const Footnotes: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section className="footnotes" aria-labelledby="footnotes-heading">
    <h2 id="footnotes-heading">Notes</h2>
    <ol>{children}</ol>
  </section>
)

export const Footnote: React.FC<{ id?: string; children: ReactNode }> = ({
  id,
  children,
}) => <li id={id ? `fn-${id}` : undefined}>{children}</li>

const mdxComponents = {
  Caption,
  Code,
  Contact: ContactCard,
  Footnote,
  Footnotes,
  NumberedList,
  PullQuote,
  Quotation,
  Term,
  Terms,
  YoutubeEmbed,
}

export default mdxComponents
