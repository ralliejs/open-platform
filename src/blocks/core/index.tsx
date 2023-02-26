import type { ComponentLoader, RemoteRouteObject } from '~/typings'
import { createBlock } from '@rallie/block'
import type Antd from 'antd'

export interface CoreType {
  state: {
    root: HTMLElement
    slot: {
      home?: ComponentLoader
      setting?: ComponentLoader
    }
    applications: RemoteRouteObject[]
  }
  methods: {
    getAntdComponents: () => typeof Antd
  }
}

export const core = createBlock<CoreType>('core')
  .initState({
    root: null,
    slot: {
      home: null,
      setting: null,
    },
    applications: [],
  })
  .onActivate(async () => {
    // 加载Core的资源，让Core的UI先渲染 -> 注入runtime -> 加载依赖Core的其他Block
    await import('../../app')
    const before = Date.now()
    await import(/* webpackChunkName: 'runtime' */ './inject-runtime')
    const now = Date.now()
    console.log(`inject runtime in ${now - before}ms`)
  })
