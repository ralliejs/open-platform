import { Async } from '@/async'
import { ErrorBoundary } from '@/error-boundary'
import { PageLoading } from '@ant-design/pro-components'
import { Result } from 'antd'
import { RemoteRouteObject, EnhancedRouteObject } from '~/typings/routes'

export const convertRoute = (route: RemoteRouteObject): EnhancedRouteObject => {
  const { component, element, icon, children, ...rest } = route
  const remoteElement = (
    <ErrorBoundary fallback={<Result status="error" title="出错了！" />}>
      <Async loader={component} loading={<PageLoading />} />
    </ErrorBoundary>
  )
  const iconElement = icon ? (
    <ErrorBoundary>
      <Async loader={icon} />
    </ErrorBoundary>
  ) : undefined
  return {
    ...rest,
    icon: iconElement,
    element: element || (component ? remoteElement : undefined),
    children: Array.isArray(children) ? children.map(convertRoute) : undefined,
  }
}

export const convertRoutes = (routes: RemoteRouteObject[]): EnhancedRouteObject[] => {
  return Array.isArray(routes) ? routes.map(convertRoute) : []
}
