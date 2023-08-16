import './runtime'
import { i18nBlock } from './i18n'
import { routesBlock } from './routes'

i18nBlock.activate(i18nBlock.name)
routesBlock.activate(routesBlock.name)

export * from './i18n'
export * from './routes'
