import type { ComponentLoader, I18nResourceLoader, LangKey, RemoteRouteObject } from '~/typings'
import { createBlock } from '@rallie/block'

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
    addLang: (lang: { label: string; key: string }) => void
    addI18nResources: (resources: Record<LangKey, I18nResourceLoader>) => Promise<void>
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
    const { refreshResources } = await import('~/i18n')
    await refreshResources(core.state.i18n.lang)
    // 加载Core的资源，让Core的UI先渲染 -> 注入runtime -> 加载依赖Core的其他Block
    import('~/app')
    const before = Date.now()
    await import('./runtime')
    const now = Date.now()
    console.log(`inject runtime in ${now - before}ms`)
  })
