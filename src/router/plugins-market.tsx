import { CoreType, EnhancedRouteObject } from '~/typings'
import { Async } from '@/async'
// import { convertRoutes } from '~/utils/convert-route'
import { PageLoading } from '@/page-loading'

export const getPluginsMarketRoute = (state: CoreType['state']): EnhancedRouteObject => ({
  path: 'plugins-market',
  locale: 'core:menu.plugin-market',
  name: '插件市场',
  hideInMenu: true,
  element: <Async loader={() => import('#/plugins-market/index.page')} loading={<PageLoading />} />,
})
