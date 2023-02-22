import { ProLayout, PageContainer, type ProLayoutProps } from '@ant-design/pro-components'
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import type { EnhancedRouteObject } from '~/typings'

interface SystemLayoutProps {
  route: EnhancedRouteObject
}

type MenuItemRenderType = Exclude<ProLayoutProps['menuItemRender'], boolean>
type BreadCrumbItemRenderType = ProLayoutProps['itemRender']
type OnMenuHeaderClickType = ProLayoutProps['onMenuHeaderClick']

export const SystemLayout = (props: SystemLayoutProps) => {
  const { route } = props
  const location = useLocation()
  const navigate = useNavigate()
  const onMenuHeaderClick: OnMenuHeaderClickType = () => {
    navigate('/')
  }
  const menuItemRender: MenuItemRenderType = (item, element) => {
    return <Link to={item.path}>{element}</Link>
  }
  const breadCrumbItemRender: BreadCrumbItemRenderType = (route) => {
    return <Link to={route.path}>{route.breadcrumbName}</Link>
  }
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
        title="Rallie Admin"
        onMenuHeaderClick={onMenuHeaderClick}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </>
  )
}

SystemLayout.displayName = 'SystemLayout'
