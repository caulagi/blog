import { Avatar as NextUiAvatar, AvatarImage } from '@heroui/react'

const Avatar: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <NextUiAvatar className="w-32 h-32">
        <AvatarImage src="/assets/blog/authors/pradip.jpg" />
      </NextUiAvatar>
    </div>
  )
}

export default Avatar
