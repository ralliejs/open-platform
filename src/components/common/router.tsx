import React from 'react'

// 自动注册pages目录下的所有页面
const importPageFiles = require.context('~/pages', true, /index\.(tsx|ts|jsx|js)$/)
const pageFiles = importPageFiles.keys()
console.log(pageFiles)

const Routers: React.FunctionComponent = () => {
  return <div>Routers</div>
}

export default React.memo(Routers)
