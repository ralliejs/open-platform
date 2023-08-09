import { createBlock } from '@rallie/block'
import { RemoteRouteObject } from '~/typings/routes'

type State = {
  root: (RemoteRouteObject & { owner: string })[]
}

type Methods = {
  addRoute: (routes: RemoteRouteObject, position: keyof State) => void
}

export const extendsionsRoutesBlock = createBlock<{
  state: State
  methods: Methods
}>('origin:extensions:routes')
  .initState({
    root: [],
  })
  .onActivate(() => {
    extendsionsRoutesBlock.addMethods({
      addRoute(this: { trigger: string }, route, position = 'root') {
        const { trigger: owner } = this
        extendsionsRoutesBlock.setState(`add route of ${owner}`, (state) => {
          if (state[position]) {
            state[position].push({ ...route, owner })
          }
        })
      },
    })
  })
