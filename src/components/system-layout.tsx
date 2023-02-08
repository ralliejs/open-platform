import { ProLayout, PageContainer, type ProLayoutProps } from '@ant-design/pro-components'
import { Outlet, useLocation, Link } from 'react-router-dom'
import type { EnhancedRouteObject } from '~/typings'

interface SystemLayoutProps {
  route: EnhancedRouteObject
}

type MenuItemRenderType = Exclude<ProLayoutProps['menuItemRender'], boolean>
type BreadCrumbItemRenderType = ProLayoutProps['itemRender']

export const SystemLayout = (props: SystemLayoutProps) => {
  const { route } = props
  const menuItemRender: MenuItemRenderType = (item, element) => {
    return <Link to={item.path}>{element}</Link>
  }
  const breadCrumbItemRender: BreadCrumbItemRenderType = (route) => {
    return <Link to={route.path}>{route.breadcrumbName}</Link>
  }
  const location = useLocation()
  const title = <Link to="/">Rallie Admin</Link>
  return (
    <>
      <ProLayout
        location={location}
        route={route}
        menuItemRender={menuItemRender}
        breadcrumbProps={{
          itemRender: breadCrumbItemRender,
        }}
        layout="side"
        title={title as any}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </>
  )
}

SystemLayout.displayName = 'SystemLayout'
