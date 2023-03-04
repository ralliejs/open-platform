import type React from 'react'
import type { RouteObject } from 'react-router-dom'
import type { ProLayoutProps } from '@ant-design/pro-components'

type MenuItemType = ProLayoutProps['route']

export type EnhancedRouteObject = Omit<RouteObject, 'children'> &
  Omit<MenuItemType, 'children'> & {
    children?: EnhancedRouteObject[]
  }

export type ComponentLoader = Parameters<typeof React.lazy>[0]

export type RemoteRouteObject = Omit<EnhancedRouteObject, 'element'> & {
  loader?: ComponentLoader
  children?: RemoteRouteObject
}

export type LangKey = string
export type I18nNamespace = string
export type I18nResourceLoader = () => Promise<{ default: Record<string, any> }>

export interface CoreType {
  state: {
    slots: {
      home?: ComponentLoader
      setting?: ComponentLoader
    }
    applications: RemoteRouteObject[]
    i18n: {
      lang: string
      supportedLangs: Array<{
        label: string
        key: string
      }>
    }
  }
  methods: {
    addLang: (lang: { label: string; key: string }) => void
    addI18nResources: (resources: Record<LangKey, I18nResourceLoader>) => Promise<void>
  }
}