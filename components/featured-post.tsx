import Link from 'next/link'

import CoverImage, { ImageProps } from './cover-image'
import DateFormatter from './date-formatter'

interface FeaturedPostProps {
  title: string
  coverImage: ImageProps
  date: string
  excerpt: string
  slug: string
  tags?: string[]
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags = [],
}) => {
  return (
    <Link href={`/posts/${slug}`} className="featured">
      <CoverImage title={title} image={coverImage} />
      <div className="meta-row">
        <span className="accent">Latest</span>
        <span>
          <DateFormatter dateString={date} />
        </span>
        {tags.length > 0 && <span>{tags.join(' · ')}</span>}
      </div>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </Link>
  )
}

export default FeaturedPost
