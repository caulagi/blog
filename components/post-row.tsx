import Link from 'next/link'

import DateFormatter from './date-formatter'

interface PostRowProps {
  title: string
  date: string
  excerpt: string
  slug: string
  tags?: string[]
}

const PostRow: React.FC<PostRowProps> = ({
  title,
  date,
  excerpt,
  slug,
  tags = [],
}) => {
  return (
    <Link href={`/posts/${slug}`} className="post-row">
      <div className="date">
        <DateFormatter dateString={date} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        {tags.length > 0 && (
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export default PostRow
