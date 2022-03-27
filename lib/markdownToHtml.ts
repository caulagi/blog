import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkPrism from 'remark-prism'
import remarkDirective from 'remark-directive'
import { visit } from 'unist-util-visit'

function youtubePlugin() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'youtube') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id
        if (node.type === 'textDirective')
          console.warn('Text directives for `youtube` not supported', node)
        if (!id) console.warn('Missing video id', node)
        data.hName = 'iframe'
        data.hProperties = {
          src: 'https://www.youtube.com/embed/' + id,
          class: 'w-full aspect-[4/3]',
          frameborder: '0',
          allow:
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: true,
        }
      }
    })
  }
}

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const r = remark()
  r.use(remarkParse)
  r.use(remarkDirective)
  r.use(youtubePlugin)
  r.use(remarkPrism)
  r.use(remarkHtml, { sanitize: false })
  return (await r.process(markdown)).toString()
}
