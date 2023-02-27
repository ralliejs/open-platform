import { core } from './index'
import { resourceLoadersMap } from '~/i18n'

const updateResources = (lang: string) => {
  const resourceLoaders = resourceLoadersMap[lang]
  if (resourceLoaders) {
    return Promise.all(resourceLoaders.map((loader) => loader())).then((resources) => {
      let result: Record<string, string> = {}
      resources.forEach((resource) => {
        result = {
          ...result,
          ...resource.default,
        }
      })
      core.setState('set i18n resources', (state) => {
        const { lang } = state.i18n
        state.i18n.resources[lang] = result
      })
    })
  }
}

updateResources(core.state.i18n.lang)

core
  .watchState((state) => state.i18n.lang)
  .do((lang, prevLang) => {
    if (lang !== prevLang) {
      updateResources(lang)
    }
  })

core.addMethods({
  addI18nResource: (resource) => {
    Object.entries(resource).forEach(([lang, loader]) => {
      if (!resourceLoadersMap[lang]) {
        resourceLoadersMap[lang] = []
      }
      resourceLoadersMap[lang].push(loader)
      if (lang === core.state.i18n.lang) {
        updateResources(lang)
      }
    })
  },
})
