import { loadHtml } from '@rallie/load-html'
import { loadGithubPage } from './middlewares/load-github-page'

import '~/styles/index.css'
import { createBlock } from '@rallie/block'

const origin = createBlock('origin').onActivate(async () => {
  await import('~/extensions-kit')
  import('./app')
})

origin.run(async (env) => {
  env.use(
    loadHtml({
      filter: (element) => {
        switch (element.tagName.toLowerCase()) {
          case 'script':
            return element.id !== '@rallie/block'
          case 'link':
            return (element as HTMLLinkElement).href.endsWith('.css')
          default:
            return true
        }
      },
    }),
  )
  env.use(loadGithubPage)
  origin.activate(origin.name)
})
