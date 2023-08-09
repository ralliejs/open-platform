import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import * as Antd from 'antd'

window.React = React
window.ReactDOM = ReactDOM
window.ReactRouterDOM = ReactRouterDOM
window.Antd = Antd
console.log(
  `runtime: React@${React.version}, ReactDOM@${ReactDOM.version}, ReactRouterDOM, Antd@${Antd.version}`,
)
