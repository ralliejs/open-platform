import type React from 'react'
import type { RouteObject } from 'react-router-dom'
import type { ProLayoutProps } from '@ant-design/pro-components'

type MenuItemType = ProLayoutProps['route']

export type EnhancedRouteObject = Omit<RouteObject, 'children'> &
  Omit<MenuItemType, 'children'> & {
    children?: EnhancedRouteObject[]
  }

export type ComponentLoader = () => Promise<{ default: React.ComponentType<any> }>

export type RemoteRouteObject = Omit<EnhancedRouteObject, 'element'> & {
  loader?: ComponentLoader
  children?: RemoteRouteObject
}

export type ActivateConfig = {
  container: Element | DocumentFragment
}
