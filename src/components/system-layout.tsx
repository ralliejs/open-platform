import { ProLayout, PageContainer, type ProLayoutProps } from '@ant-design/pro-components'
import { Dropdown } from 'antd'
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import { TranslationOutlined } from '@ant-design/icons'
import type { EnhancedRouteObject } from '~/typings'
import React from 'react'

type MenuItemRenderType = Exclude<ProLayoutProps['menuItemRender'], boolean>
type BreadCrumbItemRenderType = ProLayoutProps['itemRender']
type OnMenuHeaderClickType = ProLayoutProps['onMenuHeaderClick']
type ActionsRenderType = ProLayoutProps['actionsRender']

const LocaleButton = React.memo(() => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            label: <div>中文</div>,
            key: 'zh-CN',
          },
          {
            label: <div>English</div>,
            key: 'en-US',
          },
        ],
      }}
    >
      <TranslationOutlined />
    </Dropdown>
  )
})

LocaleButton.displayName = 'LocaleButton'

interface SystemLayoutProps {
  route: EnhancedRouteObject
}

export const SystemLayout = React.memo((props: SystemLayoutProps) => {
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
  const actionsRender: ActionsRenderType = (props) => {
    return [<LocaleButton key="locale" />]
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
        actionsRender={actionsRender}
        onMenuHeaderClick={onMenuHeaderClick}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </>
  )
})

SystemLayout.displayName = 'SystemLayout'
