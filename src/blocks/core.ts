import type { ComponentLoader, RemoteRouteObject } from '~/typings'
import { createBlock } from '@rallie/block'

export interface CoreType {
  state: {
    root: HTMLElement
    home?: ComponentLoader
    applications: RemoteRouteObject[]
    locale: string
  }
}

export const core = createBlock<CoreType>('core')

export interface CoreI18nType {
  state: {
    locale: string
  }
}
