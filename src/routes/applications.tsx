import { defineRoute } from './utils/defineRoute'
import { convertRoutes } from './utils/convert-route'

export const applicationsRoute = defineRoute((state) => ({
  path: 'app',
  flatMenu: true,
  children: [...convertRoutes(state.root)],
}))
