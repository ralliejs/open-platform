import React from 'react'
import { useRoutes, RouteObject, HashRouter } from 'react-router-dom'
import AsyncPage from '~/components/system/async-page'

interface Meta {
  isLayoutPage: boolean
  path: string
  hasPushedToRoutes: boolean
}

const importMetaFiles = require.context('~/pages', true, /meta\.(tsx?|jsx?)$/)
const metaFiles = importMetaFiles.keys() // 所有meta文件的路径
metaFiles.sort((a, b) => a.split('/').length - b.split('/').length) // 按照路径深度排序，确保嵌套路由中的父路由总是比子路由先注册
const metas: Meta[] = metaFiles.map((filePath) => ({
  ...(importMetaFiles(filePath)?.default || {}),
  path: filePath.match(/^(\.)(.*)(meta\.)(tsx?|jsx?)$/i)?.[2],
  hasPushedToRoutes: false,
}))
const metaMap: Record<string, Meta> = {}
metas.forEach((meta) => {
  metaMap[meta.path] = meta
})

// 自动注册pages下所有页面的路由
const getPagesRoutes = (rootPath = '') => {
  const routes: RouteObject[] = []
  metas
    .filter((meta) => !meta.hasPushedToRoutes)
    .forEach((meta) => {
      const { isLayoutPage, path } = meta
      if (path.startsWith(rootPath) && path !== rootPath) {
        meta.hasPushedToRoutes = true
        routes.push({
          path,
          element: <AsyncPage path={path} />,
          children: isLayoutPage ? getPagesRoutes(path) : [],
        })
      }
    })
  return routes
}

const systemRoutes: RouteObject[] = []

export const pagesRoutes = getPagesRoutes()

export const Router: React.FunctionComponent<any> = ({ children }) => <HashRouter>{children}</HashRouter>

const Routes: React.FunctionComponent = () => {
  const routes = useRoutes([...pagesRoutes, ...systemRoutes])
  return routes
}

export default React.memo(Routes)
