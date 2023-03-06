import type React from 'react'
import type { RouteObject } from 'react-router-dom'
import type { ProLayoutProps } from '@ant-design/pro-components'
import type { UseTranslationResponse } from 'react-i18next'

type MenuItemType = ProLayoutProps['route']

export type EnhancedRouteObject = Omit<RouteObject, 'children'> &
  Omit<MenuItemType, 'children'> & {
    children?: EnhancedRouteObject[]
  }

export type ComponentLoader = Parameters<typeof React.lazy>[0]

export type RemoteRouteObject = Omit<EnhancedRouteObject, 'element' | 'icon'> & {
  icon?: ComponentLoader
  loader?: ComponentLoader
  children?: RemoteRouteObject[]
}

export type LangKey = string
export type I18nNamespace = string
export type I18nResourceLoader = () => Promise<{ default: Record<string, any> }>

export type PluginInfo = {
  title: string
  description: string
}

type UseTranslationType = () => UseTranslationResponse<string>
export interface CoreType {
  state: {
    pluginsLoaded: boolean
    slots: {
      home?: ComponentLoader
    }
    applications: RemoteRouteObject[]
    addOns: {
      pluginInfo: Record<string, PluginInfo>
    }
    lang: string
  }
  methods: {
    addI18nResources: (resources: Record<LangKey, I18nResourceLoader>) => Promise<void>
    registerPluginInfo: (pluginInfo: PluginInfo) => void
    registerSlot: (slotName: keyof CoreType['state']['slots'], loader: ComponentLoader) => void
    addApplication: (application: RemoteRouteObject) => void
    useTranslation: UseTranslationType
  }
}
