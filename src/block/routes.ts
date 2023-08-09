import { createBlock } from '@rallie/block'
import { RemoteRouteObject } from '~/typings/routes'

type ExtensionsRoutesState = {
  root: (RemoteRouteObject & { owner: string })[]
}

type ExtendsionsRoutesMethods = {
  addRoutes: (
    this: { trigger: string },
    routes: RemoteRouteObject[],
    position: keyof ExtensionsRoutesState,
  ) => void
}

const NOT_ALLOW_MODIFIED = true

export const extendsionsRoutesBlock = createBlock<{
  state: ExtensionsRoutesState
  methods: ExtendsionsRoutesMethods
}>('obvious:extensions:routes')
  .initState(
    {
      root: [],
    },
    NOT_ALLOW_MODIFIED,
  )
  .onActivate(() => {
    extendsionsRoutesBlock.addMethods({
      addRoutes(this, routes, position = 'root') {
        const { trigger: owner } = this
        extendsionsRoutesBlock.setState(`add routes of ${owner}`, (state) => {
          if (state[position]) {
            state[position].push(...routes.map((route) => ({ ...route, owner })))
          }
        })
      },
    })
  })
