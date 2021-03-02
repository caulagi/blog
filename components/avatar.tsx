const Avatar: React.FC = () => {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      <img
        src="/assets/blog/authors/pradip.jpg"
        className="h-32 w-32 lg:h-38 lg:w-38 xl:h-48 xl:w-48 rounded-full"
        alt="{AUTHOR_NAME} photo"
      />
    </div>
  )
}

export default Avatar
