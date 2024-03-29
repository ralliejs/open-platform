import { ProLayout, PageContainer, type ProLayoutProps } from '@ant-design/pro-components'
import { Dropdown, Tooltip } from 'antd'
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import { TranslationOutlined, AppstoreOutlined, LoadingOutlined } from '@ant-design/icons'
import type { EnhancedRouteObject } from '~/typings'
import React from 'react'
import { useBlockState } from '@rallie/react'
import { core } from '~/blocks/core'
import { useTranslation } from 'react-i18next'

type MenuItemRenderType = Exclude<ProLayoutProps['menuItemRender'], boolean>
type BreadCrumbItemRenderType = ProLayoutProps['itemRender']
type OnMenuHeaderClickType = ProLayoutProps['onMenuHeaderClick']
type ActionsRenderType = ProLayoutProps['actionsRender']

const supportedLangs = [
  {
    label: '简体中文',
    key: 'zh-CN',
  },
  {
    label: 'English',
    key: 'en-US',
  },
]

const LocaleButton = React.memo(() => {
  const [selectedKeys, menuItems] = useBlockState(core, (state) => {
    const selectedKeys = [state.lang]
    const menuItems = supportedLangs.map((item) => ({
      key: item.key,
      label: <div>{item.label}</div>,
    }))
    return [selectedKeys, menuItems]
  })
  return (
    <Dropdown
      arrow
      menu={{
        onClick: ({ key }) => {
          core.setState('change locale', (state) => {
            state.lang = key
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

const PluginsMarketEntry = () => {
  const pluginsLoaded = useBlockState(core, (state) => state.pluginsLoaded)
  const { t } = useTranslation('core')
  return pluginsLoaded ? (
    <Tooltip title={t('menu.plugin-market')} placement="right">
      <Link to="/plugins-market">
        <AppstoreOutlined style={{ color: 'grey' }} />
      </Link>
    </Tooltip>
  ) : (
    <LoadingOutlined />
  )
}

interface SystemLayoutProps {
  route: EnhancedRouteObject
}

export const SystemLayout = React.memo((props: SystemLayoutProps) => {
  const { route } = props
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()
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
    return [<PluginsMarketEntry key="plugins-market" />, <LocaleButton key="locale" />]
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
        locale={core.state.lang as any}
        layout="side"
        title="Rallie Open Platform"
        actionsRender={actionsRender}
        onMenuHeaderClick={onMenuHeaderClick}
        formatMessage={(message) => t(message.id)}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </>
  )
})

SystemLayout.displayName = 'SystemLayout'
