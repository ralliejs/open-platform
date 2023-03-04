import { Async } from '@/async'
import { ErrorBoundary } from '@/error-boundary'
import { PageLoading } from '@ant-design/pro-components'
import { Result } from 'antd'
import { RemoteRouteObject, EnhancedRouteObject } from '~/typings'

export const convertRoute = (route: RemoteRouteObject): EnhancedRouteObject => {
  const { loader, element, icon, children, ...rest } = route
  const remoteElement = (
    <ErrorBoundary fallback={<Result status="error" title="出错了！" />}>
      <Async loader={loader} loading={<PageLoading />} />
    </ErrorBoundary>
  )
  const iconElement = icon ? (
    <ErrorBoundary>
      <Async loader={icon} loading={<PageLoading />} />
    </ErrorBoundary>
  ) : undefined
  return {
    ...rest,
    icon: iconElement,
    element: element || (loader ? remoteElement : undefined),
    children: Array.isArray(children) ? children.map(convertRoute) : undefined,
  }
}

export const convertRoutes = (routes: RemoteRouteObject[]): EnhancedRouteObject[] => {
  return Array.isArray(routes) ? routes.map(convertRoute) : []
}
