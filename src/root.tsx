import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { IntlProvider } from 'react-intl'
import { Router } from './router'

export const Root = () => {
  const providers = [
    <IntlProvider key="intl" locale={'zh'} />,
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
