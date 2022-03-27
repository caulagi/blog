import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkPrism from 'remark-prism'
import { visit } from 'unist-util-visit'

function youtubeDirective(node: any) {
  const data = node.data || (node.data = {})
  const attributes = node.attributes || {}
  const id = attributes.id
  if (node.type === 'textDirective')
    console.warn('Text directives for `youtube` not supported', node)
  if (!id) console.warn('Missing video id', node)
  data.hName = 'iframe'
  data.hProperties = {
    src: 'https://www.youtube.com/embed/' + id,
    height: '300px',
    width: '100%',
    frameborder: '0',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: true,
  }
}

function onDirective() {
  return (tree: any) => {
    visit(
      tree,
      ['textDirective', 'leafDirective', 'containerDirective'],
      (node) => {
        if (node.name === 'youtube') {
          return youtubeDirective(node)
        }
      }
    )
  }
}

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const r = remark()
  r.use(remarkParse)
  r.use(remarkDirective)
  r.use(onDirective)
  r.use(remarkPrism)
  r.use(remarkHtml, { sanitize: false })
  return (await r.process(markdown)).toString()
}
