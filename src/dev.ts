import type { Env } from '@rallie/block'
import { core } from '~/blocks/core'

if (!localStorage.getItem('installedPlugins')) {
  localStorage.setItem('installedPlugins', '[]')
}

const installedPlugins = JSON.parse(localStorage.getItem('installedPlugins'))

export const runInEntryMode = async (env: Env) => {
  core.setState('set root', (state) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    state.root = container
  })
  await core.activate(core.name)
  installedPlugins.forEach((pluginName: string) => {
    core.activate(pluginName)
  })
}
