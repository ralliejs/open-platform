import { createStore } from '~/utils/create-store'

export const useExtensions = createStore((set) => ({
  loadingExtensions: false,
  setLoadingExtensions: (value: boolean) => {
    set((state) => {
      state.loadingExtensions = value
    })
  },
}))
