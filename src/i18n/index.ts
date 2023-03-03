import i18n from 'i18next'
import { core } from '~/blocks/core'
import { initReactI18next } from 'react-i18next'
import type { LangKey, I18nNamespace, I18nResourceLoader } from '~/typings'

const resourceLoadersMap: Record<LangKey, Record<I18nNamespace, I18nResourceLoader>> = {
  'en-US': {
    core: () => import('./resources/en-US'),
  },
  'zh-CN': {
    core: () => import('./resources/zh-CN'),
  },
}

i18n.use(initReactI18next).init({
  fallbackLng: 'zh-CN',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {},
})

export const refreshResources = async (lang: LangKey) => {
  const resourceLoaders = resourceLoadersMap[lang]
  const namespaces = Object.keys(resourceLoaders)
  if (resourceLoaders) {
    const resources = await Promise.all(Object.values(resourceLoaders).map((loader) => loader()))
    resources.forEach((resource, index) => {
      const namespace = namespaces[index]
      i18n.addResources(lang, namespace, resource.default)
    })
  }
}

core
  .watchState((state) => state.i18n.lang)
  .do(async (lang, prevLang) => {
    if (lang !== prevLang) {
      await refreshResources(lang)
      i18n.changeLanguage(lang)
    }
  })

core.addMethods({
  async addI18nResources(resource, trigger?: string) {
    const namespace = trigger as string
    let shouldrefreshResources = false
    Object.entries(resource).forEach(([lang, loader]) => {
      if (!resourceLoadersMap[lang]) {
        resourceLoadersMap[lang] = {}
      }
      if (!resourceLoadersMap[lang][namespace]) {
        resourceLoadersMap[lang][namespace] = loader
      }
      if (lang === core.state.i18n.lang) {
        shouldrefreshResources = true
      }
    })
    const { lang } = core.state.i18n
    shouldrefreshResources && (await refreshResources(lang))
    i18n.changeLanguage(lang)
  },
})

export default i18n
