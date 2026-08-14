import Meta from './meta'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'

type LayoutProps = {
  children: React.ReactNode
  description?: string
  image?: string
}

const Layout: React.FC<LayoutProps> = ({ children, description, image }) => {
  return (
    <>
      <Meta description={description} image={image} />
      <div className="page shell">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}

export default Layout
