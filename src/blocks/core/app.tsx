import { createRoot } from 'react-dom/client'
import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { Router } from '~/router'
import { refreshResources } from '~/i18n'
import { core } from '~/blocks/core'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import { useBlockState } from '@rallie/react'

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const RootComponent = () => {
  const lang = useBlockState(core, (state) => state.lang)
  const providers = [
    <AntdConfigProvider locale={locales[lang as keyof typeof locales]} key="antd" />,
    <AntdApp key="antd-app" />,
  ]
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
refreshResources(core.state.lang).then(() => {
  root.render(<RootComponent />)
})
