import { registerBlock } from '@rallie/block'
import { core } from '~/blocks/core'
import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDom from 'react-router-dom'

registerBlock(core)
  .initState({
    container: null,
    home: null,
    applications: [],
  })
  .export({
    React,
    ReactDOM,
    ReactRouterDom,
  })
  .onActivate(async () => {
    await import('./app')
  })

core.run((env) => {
  if (env.isEntry) {
    core.activate(core.name)
  }
})
