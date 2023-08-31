import { ProLayout, PageContainer, type ProLayoutProps } from '@ant-design/pro-components'
import { Dropdown, Tooltip, type DropDownProps } from 'antd'
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import { TranslationOutlined, AppstoreOutlined, LoadingOutlined } from '@ant-design/icons'
import type { EnhancedRouteObject } from '~/typings/routes'
import React from 'react'
import { useBlockState } from '@rallie/react'
import { i18nBlock, changeLocale } from '~/blocks'
import { useTranslation, useI18nextTranslation } from '~/i18n'
import { useExtensions } from '~/stores/extensions'

type MenuItemRenderType = Exclude<ProLayoutProps['menuItemRender'], boolean>
type BreadCrumbItemRenderType = ProLayoutProps['itemRender']
type OnMenuHeaderClickType = ProLayoutProps['onMenuHeaderClick']
type ActionsRenderType = ProLayoutProps['actionsRender']
type DropdownMenuType = DropDownProps['menu']

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
  const [selectedKeys, menuItems] = useBlockState(i18nBlock, (state) => {
    const selectedKeys = [state.language]
    const menuItems = supportedLangs.map((item) => ({
      key: item.key,
      label: <div>{item.label}</div>,
    }))
    return [selectedKeys, menuItems]
  })
  const menu = React.useMemo<DropdownMenuType>(
    () => ({
      onClick: ({ key }) => {
        changeLocale(key as any)
      },
      items: menuItems,
      selectedKeys,
    }),
    [menuItems, selectedKeys],
  )
  return (
    <Dropdown arrow menu={menu}>
      <TranslationOutlined />
    </Dropdown>
  )
})

LocaleButton.displayName = 'LocaleButton'

const ExtensionsMarketEntry = () => {
  const { loadingExtensions } = useExtensions()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = React.useCallback(() => {
    navigate('/extensions-market')
  }, [navigate])
  return loadingExtensions ? (
    <LoadingOutlined />
  ) : (
    <Tooltip title={t('menu.plugin-market')}>
      <AppstoreOutlined style={{ color: 'grey' }} onClick={onClick} />
    </Tooltip>
  )
}

interface SystemLayoutProps {
  route: EnhancedRouteObject
}

const actionsRender: ActionsRenderType = () => {
  return [<ExtensionsMarketEntry key="plugins-market" />, <LocaleButton key="locale" />]
}

const breadCrumbItemRender: BreadCrumbItemRenderType = (route, params, routes, path) => {
  return <Link to={route.path}>{route.breadcrumbName}</Link>
}

const menuItemRender: MenuItemRenderType = (item, element) => {
  return <Link to={item.path}>{element}</Link>
}

export const SystemLayout = React.memo((props: SystemLayoutProps) => {
  const { route } = props
  const location = useLocation()
  const { t } = useI18nextTranslation()
  const navigate = useNavigate()
  const onMenuHeaderClick = React.useCallback<OnMenuHeaderClickType>(() => {
    navigate('/')
  }, [navigate])
  const locale = useBlockState(i18nBlock, (state) => state.language)
  return (
    <>
      <ProLayout
        fixSiderbar
        location={location}
        route={route}
        menuItemRender={menuItemRender}
        itemRender={breadCrumbItemRender}
        locale={locale}
        layout="mix"
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
