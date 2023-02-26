import { core } from '~/blocks/core'

core.run(async (env) => {
  if (env.isEntry) {
    const app = await import('./dev')
    app.runInEntryMode(env)
  }
})
