import { Async } from '@/async'
import { ErrorBoundary } from '@/error-boundary'
import { Result } from 'antd'
import { RemoteRouteObject, EnhancedRouteObject } from '~/typings'

export const convertRoute = (route: RemoteRouteObject): EnhancedRouteObject => {
  const { loader, element, children, ...rest } = route
  const RemoteElement = (
    <ErrorBoundary fallback={<Result status="error" title="出错了！" />}>
      <Async loader={loader} />
    </ErrorBoundary>
  )
  return {
    ...rest,
    element: element || (loader ? RemoteElement : undefined),
    children: Array.isArray(children) ? children.map(convertRoute) : undefined,
  }
}

export const convertRoutes = (routes: RemoteRouteObject[]): EnhancedRouteObject[] => {
  return Array.isArray(routes) ? routes.map(convertRoute) : []
}
