import Footer from './footer'
import Meta from './meta'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen font-regular">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
