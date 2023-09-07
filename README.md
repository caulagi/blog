# Pradip Caulagi's blog

[![CI](https://github.com/caulagi/blog/actions/workflows/ci.yml/badge.svg)](https://github.com/caulagi/blog/actions/workflows/ci.yml)

The blog uses next.js, mdx, typescript, and tailwindcss. The pages are statically generated at build time.

The blog posts are stored in `/_posts` as mdx files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`][remark] and [`remark-html`][remark-html] to convert the mdx files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`][gray-matter] and also sent in props to the page.

## Getting started

```
$ npm install
$ npm run dev
```

### History

Git commit history doesn't accurately reflect the history of the articles prior to March 2021, because initially I had my blog on Medium. I migrated the articles from Medium due to the paywall.

## LICENSE

This project is licensed under [`MIT`](LICENSE).

[remark]: https://github.com/remarkjs/remark
[remark-html]: https://github.com/remarkjs/remark-html
[gray-matter]: https://github.com/jonschlinkert/gray-matter
