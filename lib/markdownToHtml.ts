import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkPrism from 'remark-prism'

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  const r = remark()
  r.use(remarkParse)
  r.use(remarkDirective)
  r.use(remarkPrism)
  r.use(remarkHtml, { sanitize: false })
  return (await r.process(markdown)).toString()
}
