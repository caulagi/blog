import { Link } from '@heroui/react'

const ContactMe: React.FC = () => {
  return (
    <div className="pb-12">
      Happy to hear your thoughts:{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        width="1em"
        className="inline-block align-text-bottom"
        viewBox="0 0 512 512"
      >
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
      </svg>{' '}
      caulagi AT gmail DOT com or &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        width="1em"
        className="inline-block align-text-bottom"
        viewBox="0 0 448 512"
      >
        <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z" />
      </svg>
      <Link
        rel="me"
        href="https://mastodon.social/@caulagi"
        className="mb-2 font-sans font-semibold"
        target="_blank"
      >
        &nbsp; mastodon
      </Link>
      &nbsp; .
    </div>
  )
}

export default ContactMe
