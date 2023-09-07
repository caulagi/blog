import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react'

type PostBodyProps = {
  source: MDXRemoteSerializeResult
}

const components = {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Link,
  Image,
}

const PostBody: React.FC<PostBodyProps> = ({ source }) => {
  return <MDXRemote {...source} components={{ ...components }} />
}

export default PostBody
