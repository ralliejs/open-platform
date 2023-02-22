import { Async } from '@/async'
import { RemoteRouteObject, EnhancedRouteObject } from '~/typings'

export const convertRoute = (route: RemoteRouteObject): EnhancedRouteObject => {
  const { loader, element, children, ...rest } = route
  return {
    ...rest,
    element: element || (loader ? <Async loader={loader} /> : undefined),
    children: Array.isArray(children) ? children.map(convertRoute) : undefined,
  }
}

export const convertRoutes = (routes: RemoteRouteObject[]): EnhancedRouteObject[] => {
  return Array.isArray(routes) ? routes.map(convertRoute) : []
}
