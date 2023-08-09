import i18n from 'i18next'
import { core } from '~/blocks/core'
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next'

const resourceLoadersMap: Record<
  string,
  Record<string, () => Promise<{ default: Record<string, any> }>>
> = {
  'en-US': {
    origin: () => import('./resources/en-US'),
  },
  'zh-CN': {
    origin: () => import('./resources/zh-CN'),
  },
}

i18n.use(initReactI18next).init({
  fallbackLng: core.state.lang,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {},
})

export const applyResources = async (lang: string) => {
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

export const addResources = (
  namespace: string,
  resources: Record<string, () => Promise<{ default: Record<string, any> }>>,
) => {
  Object.entries(resources).forEach(([lang, loader]) => {
    if (!resourceLoadersMap[lang]) {
      resourceLoadersMap[lang] = {}
    }
    if (!resourceLoadersMap[lang][namespace]) {
      resourceLoadersMap[lang][namespace] = loader
    }
  })
}

export const useTranslation = () => {
  return useI18nextTranslation('origin')
}

export { i18n }
