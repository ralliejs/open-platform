import loadHtml from '@rallie/load-html'

export const loadHtmlMiddleware = loadHtml({
  filter: (element) => {
    switch (element.tagName.toLowerCase()) {
      case 'script':
        return element.id !== '@rallie/block'
      case 'link':
        return (element as HTMLLinkElement).href.endsWith('.css')
      default:
        return true
    }
  },
})
