import { Button } from 'antd'
import { useIntl } from 'react-intl'
import { core } from '~/blocks/core'

export default function SettingsPage() {
  const intl = useIntl()
  return (
    <Button
      onClick={() => {
        core.methods.addI18nResource({
          'zh-CN': () => Promise.resolve({ default: { anotherHelloWorld: '你好世界!!!' } }),
          'en-US': () => Promise.resolve({ default: { anotherHelloWorld: '你好世界!!!' } }),
        })
      }}
    >
      {intl.formatMessage({ id: 'anotherHelloWorld' })}
    </Button>
  )
}
