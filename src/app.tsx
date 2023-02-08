import { createRoot } from 'react-dom/client'
import { core } from '~/blocks/core'
import { Root as RootComponent } from './root'

let container = core.state.container
if (!container) {
  container = document.createElement('div')
  document.body.appendChild(container)
}
const root = createRoot(container)
root.render(<RootComponent />)
