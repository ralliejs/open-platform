import type { ComponentLoader, RemoteRouteObject } from '~/typings'
import { createBlock } from '@rallie/block'
import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDom from 'react-router-dom'

export interface Core {
  state: {
    container: HTMLElement
    home?: ComponentLoader
    applications: RemoteRouteObject[]
  }
  exports: {
    React: typeof React
    ReactDOM: typeof ReactDOM
    ReactRouterDom: typeof ReactRouterDom
  }
}

export const core = createBlock<Core>('core')
