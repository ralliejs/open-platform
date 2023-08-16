import { Async } from '@/async'
// import { convertRoutes } from '~/utils/convert-route'
import { PageLoading } from '@/page-loading'
import { defineRoute } from './utils/defineRoute'

export const extensionsMarketRoute = defineRoute(() => ({
  path: 'extensions-market',
  locale: 'origin:menu.plugin-market',
  name: '插件市场',
  hideInMenu: true,
  element: (
    <Async loader={() => import('#/extensions-market/index.page')} loading={<PageLoading />} />
  ),
}))
