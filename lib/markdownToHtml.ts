import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkPrism from 'remark-prism'

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  const r = remark()
  r.use(remarkPrism)
  r.use(remarkHtml, { sanitize: false })
  return (await r.process(markdown)).toString()
}
