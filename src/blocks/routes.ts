import { createBlock } from '@rallie/block'
import { RemoteRouteObject } from '~/typings/routes'
import { ORIGIN_ROUTES_BLOCK } from '~/utils/constants'

export type RoutesBlock = {
  state: {
    root: RemoteRouteObject[]
  }
  methods: {
    addRoute: (
      route: Omit<RemoteRouteObject, 'owner'>,
      position?: keyof RoutesBlock['state'],
    ) => void
  }
}

const transformRoute = (
  route: Omit<RemoteRouteObject, 'owner'>,
  owner: string,
  prePath = '',
): RemoteRouteObject => {
  const { locale, path: rawPath } = route
  let path = rawPath
  if (typeof path === 'string') {
    path = prePath + rawPath
  }
  return {
    ...route,
    path,
    owner,
    locale: locale && `${owner}:${route.locale}`,
    children: Array.isArray(route.children)
      ? route.children.map((child) => transformRoute(child, owner))
      : undefined,
  }
}

export const routesBlock = createBlock<RoutesBlock>(ORIGIN_ROUTES_BLOCK)
  .initState({
    root: [],
  })
  .onActivate(() => {
    routesBlock.addMethods({
      addRoute(this: { trigger: string }, route, position = 'root') {
        const { trigger: owner } = this
        routesBlock.setState(`add route of ${owner}`, (state) => {
          if (state[position]) {
            state[position].push(transformRoute(route, owner, `${owner}/`))
          }
        })
      },
    })
  })
