# Caulagi blog redesign — handoff

## Files

- `content/posts/look-ma-kubernetes-objects.mdx` — example post, showing every element
  the design covers: h2 eyebrow, inline code, two fenced blocks with `title=`,
  a plain `>` blockquote, a cited `<PullQuote>`, a list, and the `<Contact />` sign-off.
- `content/about.mdx` — about page. Photo, lede and the three facts come from frontmatter.
- `styles/blog.css` — the whole design as plain CSS + custom properties: site chrome,
  home list, post/about layouts, `.prose-blog` MDX body, `.code-card` blocks and the
  `.contact-card` sign-off. Import once in `app/layout.tsx`.
- `components/mdx-components.tsx` — the same styling as Tailwind-flavoured components
  (use this OR the CSS classes, not both). Pass to `MDXProvider` or
  `useMDXComponents`; nothing in the MDX needs to know about CSS.

## Frontmatter contract

Posts: `title, excerpt, date, coverImage, coverCredit, tags[], author{name,picture}`.
About: `title, description, lede, picture, facts[{label,value}]`.

If you prefer plain CSS over Tailwind: import `styles/blog.css` and give the MDX body
`class="prose-blog"` — the element rules then style headings, code, quotes and lists
with no per-element components. Only `<PullQuote>`, `<Caption>` and `<Contact />` still
need the small wrappers (markup shown in the CSS comments).

## Type + color

- Newsreader 300/400 for reading, JetBrains Mono 400/500 for all metadata and code.
- paper `#FBF8F3` · ink `#1B1A16` · muted `#6E6A5E` · rules `#E7E1D5` · accent `#B4441F`.
- Measure is 760px for the page shell; body copy sits under ~58ch.

## Code blocks

Add `rehype-pretty-code` (or shiki) and feed it the token colors listed at the
bottom of `mdx-components.tsx`. The `title="…"` fence meta becomes the filename
header; the language chip comes from the fence language.
