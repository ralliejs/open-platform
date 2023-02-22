import { registerBlock } from '@rallie/block'
import { core } from '~/blocks/core'
import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDom from 'react-router-dom'

registerBlock(core)
  .initState({
    root: null,
    home: null,
    applications: [],
    locale: 'zh-cn',
  })
  .onActivate(async () => {
    await import('./app')
  })

window.React = React
window.ReactDOM = ReactDOM
// @ts-ignore
window.ReactRouterDom = ReactRouterDom

core.run(async (env) => {
  if (env.isEntry) {
    const app = await import('./dev')
    app.runInEntryMode(env)
  }
})
