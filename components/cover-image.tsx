export interface ImageProps {
  src: string
  slug?: string
  authorName?: string
  authorUrl?: string
}

export interface CoverImageProps {
  title: string
  image: ImageProps
}

const CoverImage: React.FC<CoverImageProps> = ({ title, image }) => {
  return (
    <div className="cover">
      <img src={image.src} alt={`Cover image for ${title}`} />
    </div>
  )
}

export default CoverImage
