import { Navigate } from 'react-router-dom'
import { EnhancedRouteObject, RemoteRouteObject } from '~/typings'
import { convertRoutes } from '~/utils/convert-route'

export const getTodoRoute = (remoteRoutes: RemoteRouteObject[] = []): EnhancedRouteObject => ({
  path: 'todo',
  name: 'sample',
  children: [
    {
      index: true,
      element: <Navigate to={'/todo/list'} />,
    },
    {
      path: 'list',
      name: 'Todo列表',
      element: <h1>Todo列表</h1>,
    },
    {
      path: 'create',
      name: '新增Todo',
      element: <h1>添加Todo</h1>,
    },
    {
      path: ':todoID',
      name: 'Todo详情',
      hideInMenu: true,
      children: [
        {
          path: '/todo/:todoID',
          name: 'Todo详情',
          element: <h1>Todo详情</h1>,
        },
        {
          path: 'edit',
          name: '编辑Todo',
          element: <h1>编辑Todo</h1>,
        },
      ],
    },
    ...convertRoutes(remoteRoutes),
  ],
})
