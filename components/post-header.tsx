import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage, { ImageProps } from './cover-image'
import PostTitle from './post-title'

interface PostHeaderProps {
  title: string
  coverImage: ImageProps
  date: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-row items-center">
        <div className="mr-4">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} props={coverImage} />
      </div>
    </>
  )
}

export default PostHeader
