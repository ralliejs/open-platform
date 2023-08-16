import { useTranslation } from 'react-i18next'
import type { UseTranslationResponse } from 'react-i18next'
import { createBlock } from '@rallie/block'
import { i18n, applyResources, addResources } from '~/i18n'
import { LocalStorage } from '~/utils/local-storage'
import { ORIGIN_I18N_BLOCK } from '~/utils/constants'

export type I18nBlock = {
  state: {
    language: 'zh-CN' | 'en-US'
  }
  methods: {
    addI18nResources: (
      resource: Record<string, () => Promise<{ default: Record<string, any> }>>,
    ) => Promise<void>
    useTranslation: () => UseTranslationResponse<string>
  }
}

export const i18nBlock = createBlock<I18nBlock>(ORIGIN_I18N_BLOCK)
  .initState({
    language: 'zh-CN',
  })
  .onActivate(async () => {
    i18nBlock
      .watchState((state) => state.language)
      .do(async (lang, prevLang) => {
        if (lang !== prevLang) {
          await applyResources(lang)
          i18n.changeLanguage(lang)
          LocalStorage.set('lang', lang)
        }
      })
    i18nBlock.addMethods({
      async addI18nResources(this: { trigger: string }, resources) {
        const { trigger: namespace } = this
        const { language } = i18nBlock.state
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
    await applyResources(i18nBlock.state.language)
  })

export const changeLocale = (language: I18nBlock['state']['language']) => {
  i18nBlock.setState('change locale', (state) => {
    state.language = language
  })
}
