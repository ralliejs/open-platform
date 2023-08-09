import type React from 'react'
import type { RouteObject } from 'react-router-dom'
import type { ProLayoutProps } from '@ant-design/pro-components'

type MenuItemType = ProLayoutProps['route']

export type EnhancedRouteObject = Omit<RouteObject, 'children'> &
  Omit<MenuItemType, 'children'> & {
    children?: EnhancedRouteObject[]
  }

export type ComponentLoader = Parameters<typeof React.lazy>[0]

export type RemoteRouteObject = Omit<EnhancedRouteObject, 'element' | 'icon'> & {
  icon?: ComponentLoader
  component?: ComponentLoader
  children?: RemoteRouteObject[]
}
