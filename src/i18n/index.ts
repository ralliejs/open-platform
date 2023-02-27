export const resourceLoadersMap: Record<string, (() => Promise<{ default: Record<string, any> }>)[]> = {
  'en-US': [() => import('./resources/en-US')],
  'zh-CN': [() => import('./resources/zh-CN')],
}
