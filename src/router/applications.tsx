import { CoreType, EnhancedRouteObject } from '~/typings'
import { convertRoutes } from '~/utils/convert-route'

export const getApplicationsRoute = (state: CoreType['state']): EnhancedRouteObject => ({
  path: 'app',
  flatMenu: true,
  children: [...convertRoutes(state.applications)],
})
