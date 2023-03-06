import type { MiddlewareFnType } from '@rallie/block'
import { message } from 'antd'
import i18n from '~/i18n'

export const loadGithubPage: MiddlewareFnType = async (ctx, next) => {
  const [owner, repo] = ctx.name.split('/')
  const showError = () => {
    message.error(
      i18n.t('common.failedToLoadPlugin', {
        ns: 'core',
        name: ctx.name,
      }),
    )
  }
  if (owner && repo) {
    try {
      const success: boolean = await ctx.loadHtml(`https://${owner}.github.io/${repo}/`)
      if (!success) {
        showError()
      }
    } catch (err) {
      console.error(err)
      showError()
    }
  } else {
    showError()
  }
}
