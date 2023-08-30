import { createBlock } from '@rallie/block'
import type { I18nBlock, RoutesBlock } from '~/blocks'
import { ORIGIN_ROUTES_BLOCK, ORIGIN_I18N_BLOCK } from '~/utils/constants'

const mockBlock = createBlock('mock')
const routesBlock = mockBlock.connect<RoutesBlock>(ORIGIN_ROUTES_BLOCK)
const i18nBlock = mockBlock.connect<I18nBlock>(ORIGIN_I18N_BLOCK)

const mockImport = (value: any) => () => Promise.resolve({ default: value })

mockBlock
  .relyOn([routesBlock.name])
  .onActivate(async () => {
    const { addI18nResources } = i18nBlock.methods
    const { addRoute } = routesBlock.methods

    await addI18nResources({
      'zh-CN': mockImport({
        'menu.business.index': '电商管理',
        'menu.business.pms': 'PMS',
        'menu.business.oms': 'OMS',
        'menu.business.wms': 'WMS',
      }),
      'en-US': mockImport({
        'menu.business.index': 'Business Management',
        'menu.business.pms': 'PMS',
        'menu.business.oms': 'OMS',
        'menu.business.wms': 'WMS',
      }),
    }).catch((e) => {
      console.log(e)
    })

    addRoute({
      locale: 'menu.business.index',
      name: 'menu.business.index',
      path: '',
      children: [
        {
          index: true,
          component: mockImport(() => <div>pms</div>),
        },
        {
          path: 'pms',
          locale: 'menu.business.pms',
          name: 'menu.business.pms',
          component: mockImport(() => <div>pms</div>),
        },
        {
          path: 'oms',
          locale: 'menu.business.oms',
          name: 'menu.business.oms',
          children: [
            {
              path: 'wms',
              locale: 'menu.business.wms',
              name: 'menu.business.wms',
              component: mockImport(() => <div>wms</div>),
            },
          ],
        },
      ],
    })
  })
  .activate(mockBlock.name)
