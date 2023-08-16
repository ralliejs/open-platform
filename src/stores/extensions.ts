import { createStore } from '~/stores/utils/create-store'

export const useExtensions = createStore<{
  loadingExtensions: boolean
  setLoadingExtensions: (value: boolean) => void
}>((set) => ({
  loadingExtensions: false,
  setLoadingExtensions: (value: boolean) => {
    set((state) => {
      state.loadingExtensions = value
    })
  },
}))
