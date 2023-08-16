import type { RoutesBlock } from '~/blocks'
import { EnhancedRouteObject } from '~/typings/routes'

type Callback = (state: RoutesBlock['state']) => EnhancedRouteObject

export function defineRoute(callback: Callback): Callback {
  return callback
}
