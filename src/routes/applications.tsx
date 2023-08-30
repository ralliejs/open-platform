import { defineRoute } from './utils/defineRoute'
import { convertRoutes } from './utils/convert-route'

export const applicationsRoute = defineRoute((extensionsRoutes) => ({
  path: 'app',
  flatMenu: true,
  children: [...convertRoutes(extensionsRoutes.root)],
}))
