import { Nested } from '@/nested'
import { ConfigProvider as AntdConfigProvider, App as AntdApp } from 'antd'
import { Router } from './router'

export const Root = () => {
  return (
    // eslint-disable-next-line react/jsx-key
    <Nested elements={[<AntdConfigProvider />, <AntdApp />]}>
      <Router />
    </Nested>
  )
}
