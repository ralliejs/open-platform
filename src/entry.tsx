import { core } from '~/blocks/core'
import { loadHtml } from '@rallie/load-html'
import { message } from 'antd'

core.run(async (env) => {
  env.use(loadHtml())
  env.use(async (ctx, next) => {
    try {
      await ctx.loadHtml(`https://run-nan.github.io/${ctx.name}/`)
    } catch (err) {
      message.error(`${ctx.name}未被部署到run-nan的github page中`)
      next()
    }
  })
  if (env.isEntry) {
    const app = await import('./dev')
    app.runInEntryMode(env)
  }
})
