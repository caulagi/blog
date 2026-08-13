import { visit } from 'unist-util-visit'

/**
 * Rewrites rehype-pretty-code's <figure><figcaption/><pre/></figure> into the
 * design's code card:
 *
 *   <div class="code-card">
 *     <div class="code-head">
 *       <span class="code-file">controllers/db.go</span>
 *       <span class="code-lang">go</span>
 *     </div>
 *     <pre>…</pre>
 *   </div>
 *
 * The filename comes from the fence's `title="…"` meta, the chip from the
 * fence language. Must run after rehype-pretty-code.
 */

type HastNode = {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

const isElement = (node: HastNode | undefined, tagName: string): boolean =>
  node?.type === 'element' && node.tagName === tagName

const toText = (node: HastNode): string =>
  node.type === 'text'
    ? (node.value ?? '')
    : (node.children ?? []).map(toText).join('')

const span = (className: string, text: string): HastNode => ({
  type: 'element',
  tagName: 'span',
  properties: { className: [className] },
  children: [{ type: 'text', value: text }],
})

export default function rehypeCodeCard() {
  return (tree: HastNode): void => {
    visit(tree, 'element', (node: HastNode) => {
      if (node.tagName !== 'figure') return
      if (
        !node.properties ||
        !('data-rehype-pretty-code-figure' in node.properties)
      )
        return

      const children = node.children ?? []
      const caption = children.find((child) => isElement(child, 'figcaption'))
      const pre = children.find((child) => isElement(child, 'pre'))
      if (!pre) return

      const title = caption ? toText(caption) : ''
      const language = String(pre.properties?.['data-language'] ?? '')

      const head: HastNode[] = []
      if (title) head.push(span('code-file', title))
      if (language) head.push(span('code-lang', language))

      node.tagName = 'div'
      node.properties = { className: ['code-card'] }
      node.children = [
        ...(head.length > 0
          ? [
              {
                type: 'element',
                tagName: 'div',
                properties: { className: ['code-head'] },
                children: head,
              } as HastNode,
            ]
          : []),
        pre,
      ]
    })
  }
}
