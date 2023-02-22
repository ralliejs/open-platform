import { createRoot, type Root } from 'react-dom/client'
import { core } from '~/blocks/core'
import { Root as RootComponent } from './root'

let root: Root = null

core.watchState((state) => {
  if (state.root) {
    if (root) {
      root.unmount()
    }
    root = createRoot(state.root)
    root.render(<RootComponent />)
  }
})
