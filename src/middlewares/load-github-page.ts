import type { MiddlewareFnType } from '@rallie/block'
import { message } from 'antd'

export const loadGithubPage: MiddlewareFnType = async (ctx, next) => {
  const [owner, repo] = ctx.name.split('/')
  if (owner && repo) {
    try {
      const success: boolean = await ctx.loadHtml(`https://${owner}.github.io/${repo}/`)
      if (!success) {
        message.error(`加载插件 ${ctx.name} 失败`)
      }
    } catch (err) {
      console.error('Error loading github page', err)
      message.error(`加载插件 ${ctx.name} 失败`)
    }
  } else {
    message.error('插件名称不合法')
  }
}
