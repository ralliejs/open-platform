import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { core } from '~/blocks/core'

export default function SettingsPage() {
  const intl = useTranslation()
  return (
    <Button
      onClick={() => {
        core.methods.addI18nResource('corex', {
          'zh-CN': () => Promise.resolve({ default: { anotherHelloWorld: '你好世界!!!' } }),
          'en-US': () => Promise.resolve({ default: { anotherHelloWorld: 'Hello World!!!' } }),
        })
        console.log(intl.i18n.getDataByLanguage(core.state.i18n.lang))
      }}
    >
      {intl.t('corex:anotherHelloWorld')}
    </Button>
  )
}
