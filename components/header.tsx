import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline font-cursive">Blog</a>
      </Link>
      .
    </h2>
  )
}

export default Header
