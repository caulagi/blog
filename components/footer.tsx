import Container from './container'
import { GIT_REPO, AUTHOR_NAME } from '../lib/constants'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-24 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 font-cursive">
            Thoughts &amp; musings of {AUTHOR_NAME}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="/about">
              <a className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                About Me
              </a>
            </Link>
            <a
              href={`${GIT_REPO}`}
              className="mx-3 mb-3 font-bold hover:underline"
              target={'_blank'}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
