import { ProLayout, PageContainer, type ProLayoutProps } from '@ant-design/pro-components'
import { Dropdown } from 'antd'
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import { TranslationOutlined } from '@ant-design/icons'
import type { EnhancedRouteObject } from '~/typings'
import React from 'react'
import { useBlockState } from '@rallie/react'
import { core } from '~/blocks/core'

type MenuItemRenderType = Exclude<ProLayoutProps['menuItemRender'], boolean>
type BreadCrumbItemRenderType = ProLayoutProps['itemRender']
type OnMenuHeaderClickType = ProLayoutProps['onMenuHeaderClick']
type ActionsRenderType = ProLayoutProps['actionsRender']

const LocaleButton = React.memo(() => {
  const [selectedKeys, menuItems] = useBlockState(core, (state) => {
    const { lang, supportedLangs } = state.i18n
    const selectedKeys = [lang]
    const menuItems = supportedLangs.map((item) => ({
      key: item.key,
      label: <div>{item.label}</div>,
    }))
    return [selectedKeys, menuItems]
  })
  return (
    <Dropdown
      menu={{
        onClick: ({ key }) => {
          core.setState('change locale', (state) => {
            state.i18n.lang = key
          })
        },
        items: menuItems,
        selectedKeys,
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
