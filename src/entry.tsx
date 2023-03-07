import { core } from '~/blocks/core'
import { loadHtml } from '@rallie/load-html'
import { LocalStorage } from '~/utils/local-storage'
import { loadGithubPage } from './middlewares/load-github-page'

const installedPlugins = LocalStorage.touch('installedPlugins', [])

// const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time * 1000))

core.run(async (env) => {
  env.use(loadHtml())
  env.use(loadGithubPage)
  core.activate(core.name)
  // await delay(5)
  await Promise.allSettled(installedPlugins.map((pluginName: string) => core.activate(pluginName)))
  console.log('插件加载完成')
  core.setState('插件加载完成', (state) => {
    state.pluginsLoaded = true
  })
})
