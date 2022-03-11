import React from 'react'
import { useRoutes, RouteObject, Link } from 'react-router-dom'
import AsyncPage from '@/common/async-page'
import { Result, Button } from 'antd'

interface Meta {
  isLayoutPage: boolean
  path: string
  hasPushedToRoutes: boolean
}

/**
 * 自动注册pages下所有页面的路由
 * warning: 过多的嵌套路由会导致性能问题，尽量少用。如果性能出现瓶颈，需要把下面自动注册的逻辑挪到编译阶段做
 */
const importMetaFiles = require.context('~/pages', true, /meta\.(tsx?|jsx?)$/)
const metaFiles = importMetaFiles.keys() // 所有meta文件的路径
metaFiles.sort((a, b) => a.length - b.length) // 按照路径长度排序，确保嵌套路由中的父路由总是比子路由先注册
const metas: Meta[] = metaFiles.map((filePath) => ({
  ...(importMetaFiles(filePath)?.default || {}),
  path: filePath.match(/^(\.)(.*)(meta\.)(tsx?|jsx?)$/i)?.[2],
  hasPushedToRoutes: false,
}))
const metaMap: Record<string, Meta> = {}
metas.forEach((meta) => {
  metaMap[meta.path] = meta
})

// 获取pages目录下的所有路由
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

export const pagesRoutes = getPagesRoutes()

const Routes: React.FunctionComponent = () => {
  const routes = useRoutes([
    ...pagesRoutes,
    {
      path: '*',
      element: (
        <Result
          status="404"
          title="404"
          subTitle="Not Found"
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      ),
    },
  ])
  return routes
}

export default React.memo(Routes)
