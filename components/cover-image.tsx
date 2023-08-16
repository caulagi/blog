import cn from 'classnames'
import Link from 'next/link'

export interface CoverImageProps {
  title: string
  props: ImageProps
}

export interface ImageProps {
  src: string
  slug?: string
  authorName?: string
  authorUrl?: string
}

const CoverImage: React.FC<CoverImageProps> = ({ title, props }) => {
  const baseImage = (
    <img
      src={props.src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': props.slug,
      })}
    />
  )
  const image = (
    <>
      {props.authorName ? (
        <>
          {baseImage}
          <div className="text-center text-sm text-gray-400">
            Photo by &nbsp;
            <a href={props.authorUrl} target="_blank" rel="noreferrer">
              {props.authorName}
            </a>
          </div>
        </>
      ) : (
        baseImage
      )}
    </>
  )
  return (
    <div className="sm:mx-0">
      {props.slug ? (
        <Link
          as={`/posts/${props.slug}`}
          href="/posts/[slug]"
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
