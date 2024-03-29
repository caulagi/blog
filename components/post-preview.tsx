import DateFormatter from './date-formatter'
import CoverImage, { ImageProps } from './cover-image'
import Link from 'next/link'

interface PostPreviewProps {
  title: string
  coverImage: ImageProps
  date: string
  excerpt: string
  slug: string
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  coverImage['slug'] = slug
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} props={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline text-black"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
