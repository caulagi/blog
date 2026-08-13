/**
 * Shiki theme built from the token colors the design specifies for code blocks
 * (warm palette on #191814). See prototype/components/mdx-components.tsx.
 */
const codeTheme = {
  name: 'caulagi-warm',
  type: 'dark' as const,
  colors: {
    'editor.background': '#191814',
    'editor.foreground': '#E8E2D6',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#736E60', fontStyle: 'italic' },
    },
    {
      scope: [
        'keyword',
        'storage',
        'storage.type',
        'storage.modifier',
        'keyword.control',
        'keyword.operator.new',
        'variable.language',
        'entity.name.tag',
      ],
      settings: { foreground: '#D98A5B' },
    },
    {
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.name.namespace',
        'support.type',
        'support.class',
      ],
      settings: { foreground: '#E0A15D' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'variable.function',
      ],
      settings: { foreground: '#E8C07D' },
    },
    {
      scope: ['string', 'string.quoted', 'constant.other.symbol', 'markup.raw'],
      settings: { foreground: '#C9A66B' },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'constant.character',
        'support.type.property-name',
        'entity.name.tag.yaml',
        'meta.object-literal.key',
        'variable.other.member',
      ],
      settings: { foreground: '#8FA37C' },
    },
    {
      scope: ['punctuation', 'meta.brace', 'keyword.operator'],
      settings: { foreground: '#A29A88' },
    },
    {
      scope: ['variable', 'variable.other', 'variable.parameter'],
      settings: { foreground: '#E8E2D6' },
    },
  ],
}

export default codeTheme
