import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { Router } from '~/routes'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import { i18nBlock } from '~/blocks'
import { useBlockState } from '@rallie/react'
import '~/styles/index.css'
import { createRoot } from 'react-dom/client'

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const RootComponent = () => {
  const lang = useBlockState(i18nBlock, (state) => state.language)
  const providers = [
    <AntdConfigProvider locale={locales[lang]} key="antd" />,
    <AntdApp key="antd-app" />,
  ]
  return (
    <Nested elements={providers}>
      <Router />
    </Nested>
  )
}

let dom = document.getElementById('origin')
if (!dom) {
  dom = document.createElement('div')
  dom.setAttribute('id', 'origin')
  document.body.appendChild(dom)
}

const root = createRoot(dom)
root.render(<RootComponent />)
