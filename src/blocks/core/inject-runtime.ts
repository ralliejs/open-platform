import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import * as Antd from 'antd'
import { core } from './index'

window.React = React
window.ReactDOM = ReactDOM
// @ts-ignore
window.ReactRouterDOM = ReactRouterDOM
core.addMethods({
  getAntdComponents: () => {
    return Antd
  },
})
console.log('inject runtime: React, ReactDOM, ReactRouterDOM, Antd')
