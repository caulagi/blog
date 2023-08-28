import { Avatar as NextUiAvatar } from '@nextui-org/react'

const Avatar: React.FC = () => {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      <NextUiAvatar src="/assets/blog/authors/pradip.jpg" />
    </div>
  )
}

export default Avatar
