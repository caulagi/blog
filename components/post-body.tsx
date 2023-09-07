import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Quotation from './quotation'

type PostBodyProps = {
  source: MDXRemoteSerializeResult
}

const components = {
  Quotation,
}

const PostBody: React.FC<PostBodyProps> = ({ source }) => {
  return <MDXRemote {...source} components={{ ...components }} />
}

export default PostBody
