import i18n from 'i18next'
import { core } from '~/blocks/core'
import { initReactI18next } from 'react-i18next'

const resourceLoadersMap: Record<string, Record<string, () => Promise<{ default: Record<string, any> }>>> = {
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

export const updateResources = (lang: string) => {
  const resourceLoaders = resourceLoadersMap[lang]
  const namespaces = Object.keys(resourceLoaders)
  if (resourceLoaders) {
    return Promise.all(Object.values(resourceLoaders).map((loader) => loader())).then((resources) => {
      resources.forEach((resource, index) => {
        const namespace = namespaces[index]
        i18n.addResources(lang, namespace, resource.default)
      })
    })
  }
}

core
  .watchState((state) => state.i18n.lang)
  .do(async (lang, prevLang) => {
    if (lang !== prevLang) {
      await updateResources(lang)
      i18n.changeLanguage(lang)
    }
  })

core.addMethods({
  addI18nResource: async (namesapce, resource) => {
    let shouldUpdateResources = false
    Object.entries(resource).forEach(([lang, loader]) => {
      if (!resourceLoadersMap[lang]) {
        resourceLoadersMap[lang] = {}
      }
      if (!resourceLoadersMap[lang][namesapce]) {
        resourceLoadersMap[lang][namesapce] = loader
      }
      if (lang === core.state.i18n.lang) {
        shouldUpdateResources = true
      }
    })
    const { lang } = core.state.i18n
    shouldUpdateResources && (await updateResources(lang))
    i18n.changeLanguage(lang)
  },
})

export default i18n
