import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return result.toString()
}
