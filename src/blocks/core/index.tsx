import type { CoreType, RemoteRouteObject } from '~/typings'
import { createBlock } from '@rallie/block'
import { LocalStorage } from '~/utils/local-storage'
import * as RallieBlock from '@rallie/block'

if (!window.RallieBlock) {
  window.RallieBlock = RallieBlock
  console.log('inject @rallie/block')
}

export const core = createBlock<CoreType>('core')
  .initState(
    {
      pluginsLoaded: false,
      slots: {
        home: null,
      },
      applications: [],
      addOns: {
        pluginInfo: {},
      },
      lang: LocalStorage.touch('lang', navigator.language),
    },
    true,
  )
  .onActivate(async () => {
    import('./app')
    const before = Date.now()
    await import('./runtime')
    const now = Date.now()
    console.log(`inject runtime in ${now - before}ms`)
  })

core.addMethods({
  registerPluginInfo(this: { trigger: string }, pluginInfo) {
    core.setState('register plugin info', (state) => {
      state.addOns.pluginInfo[this.trigger] = pluginInfo
    })
  },
  registerSlot(this: { trigger: string }, slotName, loader) {
    core.setState('register slots', (state) => {
      state.slots[slotName] = loader
    })
  },
  addApplication(this: { trigger: string }, application) {
    const transformedApplication = (
      application: RemoteRouteObject,
      namespace: string = '',
    ): RemoteRouteObject => {
      return {
        ...application,
        path: application.path && `${namespace}${application.path}`,
        locale: application.locale && `${this.trigger}:${application.locale}`,
        children: application.children?.map((item) => transformedApplication(item)),
      }
    }
    core.setState('add application', (state) => {
      state.applications.push(transformedApplication(application, this.trigger + '/'))
    })
  },
})
