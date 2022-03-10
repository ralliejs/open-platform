import React from 'react'
import { useRoutes, Outlet, Link, RouteObject } from 'react-router-dom'
import AsyncPage from '~/components/common/async-page'

interface Meta {
  isLayoutPage: boolean
  path: string
  filePath: string
  hasPushedToRoutes: boolean
}

/**
 * 自动注册pages下所有页面的路由
 * warning: 过多的嵌套路由会导致性能问题，尽量少用。如果性能出现瓶颈，需要把这段逻辑挪到编译阶段做
 */
const importMetaFiles = require.context('~/pages', true, /meta\.(tsx?|jsx?)$/)
const metaFiles = importMetaFiles.keys()
metaFiles.sort((a, b) => a.length - b.length) // 按照路径长度排序，确保嵌套路由中的父路由总是比子路由先注册
const metas: Meta[] = metaFiles.map((filePath) => ({
  ...(importMetaFiles(filePath)?.default || {}),
  filePath,
  path: filePath.match(/^(\.)(.*)(meta\.)(tsx?|jsx?)$/i)?.[2],
  hasPushedToRoutes: false,
}))
const metaMap: Record<string, Meta> = {}
metas.forEach((meta) => {
  metaMap[meta.path] = meta
})

const getRoutes = (rootPath = '') => {
  const routes: RouteObject[] = []
  metas
    .filter((meta) => !meta.hasPushedToRoutes)
    .forEach((meta) => {
      const { isLayoutPage, path, filePath } = meta
      if (path.startsWith(rootPath) && path !== rootPath) {
        meta.hasPushedToRoutes = true
        routes.push({
          path,
          element: <AsyncPage src={filePath} />,
          children: isLayoutPage ? getRoutes(path) : [],
        })
      }
    })
  return routes
}

console.log(getRoutes())

const Routers: React.FunctionComponent = () => {
  const routes = useRoutes([
    {
      path: '/host/',
      element: (
        <div>
          <Link to="/host/about">about</Link>
          <Link to="/host/article">article</Link>
          <Outlet />
        </div>
      ),
      children: [
        {
          path: '/host/about/',
          element: <div>about</div>,
        },
        {
          path: '/host/article/',
          element: <div>article</div>,
        },
      ],
    },
  ])
  return routes
}

export default React.memo(Routers)
