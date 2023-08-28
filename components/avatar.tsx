import { Avatar as NextUiAvatar } from '@nextui-org/react'

const Avatar: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <NextUiAvatar
        src="/assets/blog/authors/pradip.jpg"
        className="w-32 h-32"
      />
    </div>
  )
}

export default Avatar
