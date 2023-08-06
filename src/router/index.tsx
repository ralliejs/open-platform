import { EnhancedRouteObject } from '~/typings'
import { SystemLayout } from '@/system-layout'
import { Async } from '@/async'
import { useBlockState } from '@rallie/react'
import { core } from '~/blocks/core'
import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom'
import { getApplicationsRoute } from './applications'
import React from 'react'
import { getPluginsMarketRoute } from './plugins-market'
import NotFound from '#/not-found/index.page'
import { PageLoading } from '@/page-loading'

export const Router = React.memo(() => {
  const routes = useBlockState(core, (state) => {
    const route: EnhancedRouteObject = {
      path: '/',
      children: [
        {
          name: '首页',
          locale: 'core:menu.home',
          path: '/',
          element: <Async loader={() => import('#/index.page')} loading={<PageLoading />} />,
          hideInMenu: true,
        },
        getApplicationsRoute(state),
        getPluginsMarketRoute(state),
      ],
    }
    const finalRoutes: EnhancedRouteObject[] = [
      {
        element: <SystemLayout route={route} />,
        children: [route],
      },
      {
        path: '*',
        element: state.pluginsLoaded ? <NotFound /> : null,
      },
    ]
    return finalRoutes
  })
  const router = createHashRouter(routes as RouteObject[])
  return <RouterProvider router={router} />
})

Router.displayName = 'Router'
