# Pradip Caulagi's blog

[![CI](https://github.com/caulagi/blog/actions/workflows/ci.yml/badge.svg)](https://github.com/caulagi/blog/actions/workflows/ci.yml)

The blog uses next.js, mdx and typescript. The pages are statically generated at build time.

The blog posts are stored in `/_posts` as mdx files with front matter support. Adding a new mdx file in there will create a new blog post. The metadata of every post is handled by [`gray-matter`][gray-matter] and sent in props to the page.

## Key choices

**Plain CSS, no framework.** The whole design lives in [`styles/index.css`][styles] as custom properties and semantic class names — `.masthead`, `.post-row`, `.prose-blog`, `.code-card`. Nothing is generated from utility classes, so a change to the look is a change to one file. [Newsreader][newsreader] is the reading face and [JetBrains Mono][jetbrains-mono] carries metadata and code.

**Posts render through [`next-mdx-remote`][next-mdx-remote].** `getStaticProps` serializes the mdx and the page hands it to `MDXRemote`, which is what lets a post mix markdown with components like `<PullQuote>` and `<Contact />`.

**Code blocks are highlighted at build time** by [`rehype-pretty-code`][rehype-pretty-code] and [`shiki`][shiki]. The theme in `lib/code-theme.ts` is the site palette rather than an off-the-shelf one, and a small rehype plugin, `lib/rehype-code-card.ts`, rewrites shiki's output into the dark card. A fence's `title=` becomes the filename in the card header.

**Feeds are routes, not files.** `/feed.xml` and `/sitemap.xml` are generated from the posts on request, so neither can drift out of date; only `robots.txt` is static.

## Getting started

```
$ npm install
$ npm run dev
```

`npm run typecheck` and `npm run lint` are what CI runs. Formatting is [`prettier`][prettier], enforced on commit.

### History

Git commit history doesn't accurately reflect the history of the articles prior to March 2021, because initially I had my blog on Medium. I migrated the articles from Medium due to the paywall.

## LICENSE

This project is licensed under [`MIT`](LICENSE).

[gray-matter]: https://github.com/jonschlinkert/gray-matter
[jetbrains-mono]: https://www.jetbrains.com/lp/mono/
[newsreader]: https://fonts.google.com/specimen/Newsreader
[next-mdx-remote]: https://github.com/hashicorp/next-mdx-remote
[prettier]: https://prettier.io/
[rehype-pretty-code]: https://rehype-pretty.pages.dev/
[shiki]: https://shiki.style/
[styles]: styles/index.css
