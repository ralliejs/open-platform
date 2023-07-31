import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Initilizer<T> = Parameters<typeof immer<T>>

export const createStore = <T extends Record<string, any>>(...args: Initilizer<T>) =>
  create(immer(...args))
