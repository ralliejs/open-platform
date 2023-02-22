import { EnhancedRouteObject } from '~/typings'
import { SystemLayout } from '@/system-layout'
import { Async } from '@/async'
import { useBlockState } from '@rallie/react'
import { core } from '~/blocks/core'
import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom'
import { getTodoRoute } from './todo'
import { getApplicationsRoute } from './applications'

export const Router = () => {
  const routes = useBlockState(core, (state) => {
    const coreRoute: EnhancedRouteObject = {
      path: '/',
      children: [
        {
          name: '首页',
          path: '/',
          element: <Async loader={() => import('#/index.page')} />,
          hideInMenu: true,
        },
        getTodoRoute(),
        getApplicationsRoute(state.applications),
      ],
    }
    const finalRoutes: EnhancedRouteObject[] = [
      {
        element: <SystemLayout route={coreRoute} />,
        children: [coreRoute],
      },
    ]
    return finalRoutes
  })
  const router = createHashRouter(routes as RouteObject[])
  return <RouterProvider router={router} />
}
