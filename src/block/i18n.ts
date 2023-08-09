import { createBlock } from '@rallie/block'

type ExtensionsI18nState = {
  language: 'zh-CN' | 'en-US'
}

export const extensionI18nBlock = createBlock<{
  state: ExtensionsI18nState
}>('obvious:extensions:i18n')
  .initState({
    language: 'zh-CN',
  })
  .onActivate(() => {})
