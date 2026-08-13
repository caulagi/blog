import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import mdxComponents from './mdx-components'

type PostBodyProps = {
  source: MDXRemoteSerializeResult
}

const PostBody: React.FC<PostBodyProps> = ({ source }) => {
  return (
    <div className="prose-blog">
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  )
}

export default PostBody
