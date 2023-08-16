import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import * as Antd from 'antd'
import * as RallieBlock from '@rallie/block'

window.React = React as any // todo: fix type error
window.ReactDOM = ReactDOM
window.ReactRouterDOM = ReactRouterDOM
window.Antd = Antd
window.RallieBlock = RallieBlock
console.log(
  `runtime: React@${React.version}, ReactDOM@${ReactDOM.version}, ReactRouterDOM, Antd@${Antd.version}, RallieBlock`,
)
