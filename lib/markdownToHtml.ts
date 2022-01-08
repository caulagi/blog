/** @typedef {import('remark-directive')} */
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkDirective from 'remark-directive'
import { visit } from 'unist-util-visit'
// import { h } from 'hastscript'

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function youtubePlugin() {
  return (tree) => {
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
        // const hast = h(node.name, node.attributes)
        // console.log(hast)
        if (node.type === 'textDirective')
          console.warn('Text directives for `youtube` not supported', node)
        if (!id) console.warn('Missing video id', node)
        data.hName = 'text'
        data.hProperties = {
          src: 'https://www.youtube.com/embed/' + id,
          width: 200,
          height: 200,
          frameBorder: 0,
          allow: 'picture-in-picture',
          allowFullScreen: true,
        }
        console.log(node)
      }
    })
  }
}

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkDirective)
    .use(youtubePlugin)
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return result.toString()
}
