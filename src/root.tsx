import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { I18nProvider } from '@/I18n-provider'
import { Router } from './router'

export const Root = () => {
  const providers = [
    <I18nProvider key="intl" />,
    <AntdConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
      key="antd"
    />,
    <AntdApp key="antd-app" />,
  ]
  return (
    <Nested elements={providers}>
      <Router />
    </Nested>
  )
}
