import type { CoreType } from '~/typings'
import { createBlock } from '@rallie/block'
import { LocalStorage } from '~/utils/local-storage'

export const core = createBlock<CoreType>('core')
  .initState({
    pluginsLoaded: false,
    slots: {
      home: null,
      setting: null,
    },
    applications: [],
    addOns: {
      pluginInfo: {},
    },
    i18n: {
      lang: LocalStorage.touch('lang', navigator.language),
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
    // 加载Core的资源，让Core的UI先渲染 -> 注入runtime -> 加载依赖Core的其他Block
    import('./app')
    const before = Date.now()
    await import('./runtime')
    const now = Date.now()
    console.log(`inject runtime in ${now - before}ms`)
  })

core.addMethods({
  registerPluginInfo(this: { trigger: string }, pluginInfo) {
    core.setState('注册插件信息', (state) => {
      state.addOns.pluginInfo[this.trigger] = pluginInfo
    })
  },
})
