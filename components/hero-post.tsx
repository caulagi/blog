import DateFormatter from './date-formatter'
import CoverImage, { ImageProps } from './cover-image'
import Link from 'next/link'

interface HeroPostProps {
  title: string
  coverImage: ImageProps
  date: string
  excerpt: string
  slug: string
}

const HeroPost: React.FC<HeroPostProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  coverImage['slug'] = slug
  return (
    <section>
      <div className="mb-8">
        <CoverImage title={title} props={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline text-black">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
