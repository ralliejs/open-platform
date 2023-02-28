import { Navigate } from 'react-router-dom'
import { EnhancedRouteObject, RemoteRouteObject } from '~/typings'
import { convertRoutes } from '~/utils/convert-route'

export const getTodoRoute = (remoteRoutes: RemoteRouteObject[] = []): EnhancedRouteObject => ({
  path: 'todo',
  name: 'sample',
  locale: 'core:menu.sample',
  children: [
    {
      index: true,
      element: <Navigate to={'/todo/list'} />,
    },
    {
      path: 'list',
      name: '列表',
      locale: 'core:menu.list',
      element: <h1>列表</h1>,
    },
    {
      path: 'create',
      name: '新增',
      locale: 'core:menu.add',
      element: <h1>添加</h1>,
    },
    {
      path: ':todoID',
      name: '详情',
      locale: 'core:menu.detail',
      hideInMenu: true,
      children: [
        {
          path: '/todo/:todoID',
          name: '详情',
          locale: 'core:menu.detail',
          element: <h1>详情</h1>,
        },
        {
          path: 'edit',
          name: '编辑Todo',
          locale: 'core:menu.edit',
          element: <h1>编辑</h1>,
        },
      ],
    },
    ...convertRoutes(remoteRoutes),
  ],
})
