export const LocalStorage = {
  touch<T = any>(key: string, defaultValue: T = null): T {
    try {
      const rawValue = window.localStorage.getItem(key)
      if (rawValue === null || rawValue === undefined) {
        LocalStorage.set(key, defaultValue)
        return defaultValue
      }
      return JSON.parse(rawValue)
    } catch (err) {
      console.error(`Error getting key ${key} from localStorage`, err)
      return null
    }
  },
  set<T = any>(key: string, value: T) {
    try {
      const serializedValue = JSON.stringify(value)
      window.localStorage.setItem(key, serializedValue)
    } catch (err) {
      console.error(`Error setting key ${key} to localStorage`, err)
    }
  },
  remove(key: string) {
    try {
      window.localStorage.removeItem(key)
    } catch (err) {
      console.error(`Error removing key ${key} from localStorage`, err)
    }
  },
  clear() {
    try {
      window.localStorage.clear()
    } catch (err) {
      console.error(`Error clearing localStorage`, err)
    }
  },
}
