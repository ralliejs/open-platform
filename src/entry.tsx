import { loadGithubPage } from './middlewares/load-github-page'
import { loadHtmlMiddleware } from './middlewares/load-html'
import { createBlock } from '@rallie/block'
import '~/styles/index.css'

const origin = createBlock('origin').onActivate(async () => {
  await import('~/blocks')
  import('./app')
})

origin.run(async (env) => {
  env.use(loadHtmlMiddleware)
  env.use(loadGithubPage)
  await origin.activate(origin.name)
  if (env.isEntry) {
    await import('~/mock/mock-block')
  }
})
