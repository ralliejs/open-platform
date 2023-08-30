import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import * as Antd from 'antd'
import * as RallieBlock from '@rallie/block'
import ReactRouterDOMPkg from 'react-router-dom/package.json'
import RallieBlockPkg from '@rallie/block/package.json'

window.React = React as any // todo: fix type error
window.ReactDOM = ReactDOM
window.ReactRouterDOM = ReactRouterDOM
window.Antd = Antd
window.RallieBlock = RallieBlock

const pkg = (name: string, version: string) => ({ runtime_name: name, version })
const runtimes = [
  pkg('React', React.version),
  pkg('ReactDOM', ReactDOM.version),
  pkg('ReactRouterDOM', ReactRouterDOMPkg.version),
  pkg('Antd', Antd.version),
  pkg('RallieBlock', RallieBlockPkg.version),
]

console.table(runtimes)
