import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { Router } from './router'

export const Root = () => {
  const providers = [
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
