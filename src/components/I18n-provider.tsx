import { useBlockState } from '@rallie/react'
import { IntlProvider } from 'react-intl'
import { core } from '~/blocks/core'
import React from 'react'

export const I18nProvider = (props: any) => {
  const [locale, messages] = useBlockState(core, (state) => {
    return [state.i18n.lang, { ...state.i18n.resources }]
  })
  const [innerLocale, setInnerLocale] = React.useState(locale)
  React.useEffect(() => {
    setTimeout(() => {
      setInnerLocale(locale)
    })
  }, [locale])
  console.log(JSON.stringify(messages, null, 2))
  return <IntlProvider locale={innerLocale} messages={messages[innerLocale]} {...props} />
}
