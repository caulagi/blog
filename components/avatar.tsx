import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      <img src='/assets/blog/authors/pradip.jpg' className="h-32 w-32 md:w-48 md:h-auto rounded-full" alt="Pradip Caulagi photo" />
    </div>
  )
}

export default Avatar
