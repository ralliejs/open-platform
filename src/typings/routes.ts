import type { RouteObject } from 'react-router-dom'
import type { ComponentLoader } from './common'
import type { ProLayoutProps } from '@ant-design/pro-components'

type MenuItemType = ProLayoutProps['route']

export type EnhancedRouteObject = Omit<RouteObject, 'children'> &
  Omit<MenuItemType, 'children'> & {
    children?: EnhancedRouteObject[]
  }

export type RemoteRouteObject = Omit<EnhancedRouteObject, 'element' | 'icon' | 'children'> & {
  owner: string
  redirect?: string
  icon?: ComponentLoader
  component?: ComponentLoader
  children?: RemoteRouteObject[]
}
