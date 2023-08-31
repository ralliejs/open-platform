import { defineRoute } from './utils/define-route'
import { convertRoutes } from './utils/convert-route'

export const applicationsRoute = defineRoute((extensionsRoutes) => ({
  path: 'app',
  flatMenu: true,
  children: [...convertRoutes(extensionsRoutes.root)],
}))
