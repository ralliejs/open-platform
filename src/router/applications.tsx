import { EnhancedRouteObject, RemoteRouteObject } from '~/typings'
import { convertRoutes } from '~/utils/convert-route'

export const getApplicationsRoute = (remoteRoutes: RemoteRouteObject[] = []): EnhancedRouteObject => ({
  path: 'app',
  flatMenu: true,
  children: [...convertRoutes(remoteRoutes)],
})
