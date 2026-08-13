interface YoutubeEmbedProps {
  title: string
  id: string
  start?: number
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ title, id, start }) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}&amp;start=${start}`}
      title={title}
      className="embed"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

export default YoutubeEmbed
