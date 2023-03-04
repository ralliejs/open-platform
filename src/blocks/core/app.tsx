import { createRoot } from 'react-dom/client'
import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { Router } from '~/router'
import { refreshResources } from '~/i18n'
import { core } from '~/blocks/core'

const RootComponent = () => {
  const providers = [<AntdConfigProvider key="antd" />, <AntdApp key="antd-app" />]
  return (
    <Nested elements={providers}>
      <Router />
    </Nested>
  )
}

let dom = document.getElementById('core')
if (!dom) {
  dom = document.createElement('div')
  dom.setAttribute('id', 'core')
  document.body.appendChild(dom)
}

const root = createRoot(dom)
refreshResources(core.state.i18n.lang).then(() => {
  root.render(<RootComponent />)
})
