import { useTranslation } from 'react-i18next'
import type { UseTranslationResponse } from 'react-i18next'
import { createBlock } from '@rallie/block'
import { i18n, applyResources, addResources } from '~/i18n'
import { LocalStorage } from '~/utils/local-storage'

type State = {
  language: 'zh-CN' | 'en-US'
}

type Methods = {
  addI18nResources: (
    resource: Record<string, () => Promise<{ default: Record<string, any> }>>,
  ) => Promise<void>
  useTranslation: () => UseTranslationResponse<string>
}

export const extensionI18nBlock = createBlock<{
  state: State
  methods: Methods
}>('origin:extensions:i18n')
  .initState({
    language: 'zh-CN',
  })
  .onActivate(async () => {
    extensionI18nBlock
      .watchState((state) => state.language)
      .do(async (lang, prevLang) => {
        if (lang !== prevLang) {
          await applyResources(lang)
          i18n.changeLanguage(lang)
          LocalStorage.set('lang', lang)
        }
      })
    extensionI18nBlock.addMethods({
      async addI18nResources(this: { trigger: string }, resources) {
        const { trigger: namespace } = this
        const { language } = extensionI18nBlock.state
        const shouldApplyImmediately = !!resources[language]
        addResources(namespace, resources)
        if (shouldApplyImmediately) {
          await applyResources(language)
        }
        i18n.changeLanguage(language)
      },
      useTranslation(this: { trigger: string }) {
        const { trigger: namespace } = this
        return useTranslation(namespace)
      },
    })
    await applyResources(extensionI18nBlock.state.language)
  })
