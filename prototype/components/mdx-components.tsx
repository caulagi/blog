// components/mdx-components.tsx
// Maps MDX output onto the redesign's type + code styling.
// Fonts: Newsreader (body/headings) + JetBrains Mono (metadata, code).
// Palette: paper #FBF8F3 · ink #1B1A16 · muted #6E6A5E · rule #E7E1D5 · accent #B4441F
//          code surface #191814 · code header #211F1A

import type { MDXComponents } from 'mdx/types'

const mono = "'JetBrains Mono', ui-monospace, monospace"

export const mdxComponents: MDXComponents = {
  p: (p) => (
    <p
      className="mb-[26px] text-[19.5px] leading-[1.72] text-[#2B2922] [text-wrap:pretty]"
      {...p}
    />
  ),

  // Section headings are mono eyebrows with a hairline above them.
  h2: (p) => (
    <h2
      className="mt-[52px] mb-5 border-t border-[#E7E1D5] pt-5 text-[15px] font-medium uppercase tracking-[0.12em] text-[#B4441F]"
      style={{ fontFamily: mono }}
      {...p}
    />
  ),

  ul: (p) => (
    <ul
      className="mb-[26px] list-disc pl-[22px] text-[19.5px] leading-[1.72] text-[#2B2922]"
      {...p}
    />
  ),
  li: (p) => <li className="mb-2.5 [text-wrap:pretty]" {...p} />,

  a: (p) => (
    <a
      className="text-[#B4441F] hover:text-[#8E3315] border-b border-[#E0BCA9]"
      {...p}
    />
  ),

  blockquote: (p) => (
    <blockquote
      className="mb-[30px] border-l-2 border-[#B4441F] py-1 pl-6 text-[21px] italic leading-[1.6] text-[#3A3730] [text-wrap:pretty]"
      {...p}
    />
  ),

  // Inline code — `like this`
  code: (p) => (
    <code
      className="rounded-[3px] border border-[#E4DDCF] bg-[#F1EADE] px-[5px] py-px text-[0.84em] text-[#8E3315]"
      style={{ fontFamily: mono }}
      {...p}
    />
  ),

  // Fenced block. Pair with rehype-pretty-code / shiki and the token colors below.
  // ```go title="controllers/database_controller.go"
  pre: ({ children, ...rest }: any) => {
    const title = rest['data-title'] ?? rest.title
    const lang = rest['data-language']
    return (
      <div className="mb-[30px] overflow-hidden rounded-md border border-[#2A2721] bg-[#191814]">
        {(title || lang) && (
          <div
            className="flex items-center justify-between border-b border-[#2E2A23] bg-[#211F1A] px-3.5 py-2.5"
            style={{ fontFamily: mono }}
          >
            <span className="text-[11.5px] tracking-[0.04em] text-[#9C9484]">
              {title}
            </span>
            <span className="text-[10.5px] uppercase tracking-[0.1em] text-[#6E6858]">
              {lang}
            </span>
          </div>
        )}
        <pre
          className="m-0 overflow-x-auto px-[18px] py-5 text-[14px] leading-[1.75] text-[#E8E2D6]"
          style={{ fontFamily: mono }}
          {...rest}
        >
          {children}
        </pre>
      </div>
    )
  },

  Caption: (p: any) => (
    <p
      className="mb-8 text-[11.5px] tracking-[0.02em] text-[#9A9488]"
      style={{ fontFamily: mono }}
      {...p}
    />
  ),

  PullQuote: ({
    cite,
    children,
  }: {
    cite?: string
    children: React.ReactNode
  }) => (
    <figure className="mb-[34px] rounded border border-[#E7E1D5] bg-[#F4EEE4] px-8 py-[30px]">
      <span className="block h-[22px] text-[44px] leading-[0.6] text-[#D9BFA9]">
        &ldquo;
      </span>
      <p className="m-0 text-[22px] italic leading-[1.55] text-[#2B2922] [text-wrap:pretty]">
        {children}
      </p>
      {cite && (
        <figcaption
          className="mt-[18px] text-[11.5px] uppercase tracking-[0.06em] text-[#8A8477]"
          style={{ fontFamily: mono }}
        >
          — {cite}
        </figcaption>
      )}
    </figure>
  ),

  // Standard sign-off at the end of every post and the about page.
  Contact: () => (
    <div className="relative mt-[46px] rounded border border-[#E7E1D5] bg-[#F4EEE4] px-7 py-[26px]">
      <span className="absolute -top-[17px] right-[26px] flex h-9 w-9 items-center justify-center rounded-full border border-[#E7E1D5] bg-[#FBF8F3] text-[17px]">
        🐢
      </span>
      <p className="mt-2.5 mb-0 text-[19px] text-[#3A3730]">
        Happy to hear your thoughts — disagreements especially.
      </p>
      <div
        className="mt-[18px] flex flex-wrap gap-2.5"
        style={{ fontFamily: mono }}
      >
        <a
          href="mailto:caulagi@gmail.com"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#E0D8C8] bg-[#FBF8F3] px-4 py-2.5 text-[12.5px] text-[#1B1A16] hover:border-[#1B1A16] hover:bg-[#1B1A16] hover:text-[#FBF8F3]"
        >
          <span className="text-[14px]">📮</span> caulagi AT gmail DOT com
        </a>
        <a
          href="https://mastodon.social/@caulagi"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#E0D8C8] bg-[#FBF8F3] px-4 py-2.5 text-[12.5px] text-[#1B1A16] hover:border-[#1B1A16] hover:bg-[#1B1A16] hover:text-[#FBF8F3]"
        >
          <span className="text-[14px]">🦣</span> mastodon.social/@caulagi
        </a>
      </div>
    </div>
  ),
}

// Syntax token colors for shiki / rehype-pretty-code (warm palette on #191814):
//   plain #E8E2D6 · comment #736E60 · keyword #D98A5B · type #E0A15D
//   function #E8C07D · string #C9A66B · key/number #8FA37C
