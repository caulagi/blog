import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Quotation from './quotation'
import YoutubeEmbed from './youtube-embed'

type PostBodyProps = {
  source: MDXRemoteSerializeResult
}

const components = {
  Quotation,
  YoutubeEmbed,
}

const PostBody: React.FC<PostBodyProps> = ({ source }) => {
  return <MDXRemote {...source} components={{ ...components }} />
}

export default PostBody
