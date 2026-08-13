import Author from './author'
import { ImageProps } from '../components/cover-image'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: ImageProps
  author: Author
  excerpt: string
  tags?: string[]
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
