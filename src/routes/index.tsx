import React from 'react'
import { EnhancedRouteObject } from '~/typings/routes'
import { SystemLayout } from '@/system-layout'
import { Async } from '@/async'
import { useBlockState } from '@rallie/react'
import { routesBlock } from '~/blocks'
import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom'
import { applicationsRoute } from './applications'
import { extensionsMarketRoute } from './extensions-market'
import NotFound from '#/not-found/index.page'
import { PageLoading } from '@/page-loading'
import { useExtensions } from '~/stores/extensions'

const useRoutes = () => {
  const { loadingExtensions } = useExtensions()
  const systemRoute = useBlockState(routesBlock, (state) => {
    const route: EnhancedRouteObject = {
      path: '/',
      children: [
        {
          name: '首页',
          locale: 'origin:menu.home',
          path: '/',
          element: <Async loader={() => import('#/index.page')} loading={<PageLoading />} />,
        },
        applicationsRoute(state),
        extensionsMarketRoute(state),
      ],
    }
    return route
  })
  const routes = React.useMemo<EnhancedRouteObject[]>(
    () => [
      {
        element: <SystemLayout route={systemRoute} />,
        children: [systemRoute],
      },
      {
        path: '*',
        element: loadingExtensions ? null : <NotFound />,
      },
    ],
    [loadingExtensions, systemRoute],
  )
  return routes
}

export const Router = React.memo(() => {
  const routes = useRoutes()
  const router = createHashRouter(routes as RouteObject[])
  return <RouterProvider router={router} />
})

Router.displayName = 'Router'
