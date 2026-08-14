type JsonLdProps = {
  data: Record<string, unknown>
}

// Rendered in the body rather than <Head> — crawlers accept JSON-LD anywhere,
// and next/head is fussy about script children.
const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    // Escaping `<` keeps a stray "</script>" in the data from closing the tag.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
  />
)

export default JsonLd
