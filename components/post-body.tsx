type PostBodyProps = {
  content: string
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostBody
