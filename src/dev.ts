import type { Env } from '@rallie/block'
import { core } from '~/blocks/core'
// import { loadHtml } from '@rallie/load-html'

export const runInEntryMode = async (env: Env) => {
  // env.use(
  //   loadHtml({
  //     entries: {
  //       'plugin-demo': 'http://localhost:5173',
  //     }
  //   }),
  // )
  core.setState('set root', (state) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    state.root = container
  })
  // await core.activate('plugin-demo')
  await core.activate(core.name)
}
