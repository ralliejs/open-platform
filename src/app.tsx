import { createRoot, type Root } from 'react-dom/client'
import { core } from '~/blocks/core'
import { Root as RootComponent } from './root'

let root: Root = null

const watcher = core.watchState((state) => {
  if (state.root) {
    root = createRoot(state.root)
    root.render(<RootComponent />)
    Promise.resolve().then(() => {
      watcher.unwatch()
    })
  }
})
