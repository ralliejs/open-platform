import type React from 'react'
import type ReactDOM from 'react-dom'
import type ReactRouterDOM from 'react-router-dom'
import type Antd from 'antd'

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.css'
declare module '*.module.less' {
  const classes: { [className: string]: string }
  export default classes
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    React: typeof React
    ReactDOM: typeof ReactDOM
    ReactRouterDOM: typeof ReactRouterDOM
    Antd: typeof Antd
  }
}

export {}
