import Meta from './meta'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="page shell">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}

export default Layout
