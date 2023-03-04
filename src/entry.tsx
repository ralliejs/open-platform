import { core } from '~/blocks/core'
import { loadHtml } from '@rallie/load-html'
import { message } from 'antd'

if (!localStorage.getItem('installedPlugins')) {
  localStorage.setItem('installedPlugins', '[]')
}

const installedPlugins = JSON.parse(localStorage.getItem('installedPlugins'))

core.run(async (env) => {
  env.use(loadHtml())
  env.use(async (ctx, next) => {
    try {
      await ctx.loadHtml(`https://ralliejs.github.io/${ctx.name}/`)
    } catch (err) {
      message.error(`${ctx.name}未被部署到ralliejs的github page中`)
      next()
    }
  })
  core.activate(core.name)
  installedPlugins.forEach((pluginName: string) => {
    core.activate(pluginName)
  })
})
