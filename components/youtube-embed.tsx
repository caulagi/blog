interface YoutubeEmbedProps {
  title: string
  id: string
  start?: number
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ title, id, start }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${id}&amp;start=${start}`}
      title={title}
      frameBorder="0"
      className="mx-auto mb-8"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

export default YoutubeEmbed
