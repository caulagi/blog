import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote'

type PostBodyProps = {
  source: string
}

const components = {
  Card: dynamic(() => import('@nextui-org/react').then((mod) => mod.Card)),
}

const PostBody: React.FC<PostBodyProps> = ({ source }) => {
  console.log(source)
  console.log(components)
  return <MDXRemote {...source} components={components} />
}

export default PostBody
