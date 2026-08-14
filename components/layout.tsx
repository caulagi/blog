import Meta from './meta'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'

type LayoutProps = {
  children: React.ReactNode
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ children, description }) => {
  return (
    <>
      <Meta description={description} />
      <div className="page shell">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}

export default Layout
