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
    i18n: {
      lang: string
      supportedLangs: Array<{
        label: string
        key: string
      }>
    }
  }
  methods: {
    getAntdComponents: () => typeof Antd
    addLang: (lang: { label: string; key: string }) => void
    addI18nResource: (namespace: string, resources: Record<string, () => Promise<{ default: Record<string, string> }>>) => void
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
    i18n: {
      lang: 'zh-CN',
      supportedLangs: [
        {
          label: '简体中文',
          key: 'zh-CN',
        },
        {
          label: 'English',
          key: 'en-US',
        },
      ],
    },
  })
  .onActivate(async () => {
    const { updateResources } = await import('~/i18n')
    await updateResources(core.state.i18n.lang)
    // 加载Core的资源，让Core的UI先渲染 -> 注入runtime -> 加载依赖Core的其他Block
    import('~/app')
    const before = Date.now()
    await import('./inject-runtime')
    const now = Date.now()
    console.log(`inject runtime in ${now - before}ms`)
  })
