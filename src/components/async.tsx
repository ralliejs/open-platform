import React from 'react'
import { ComponentLoader } from '~/typings/common'

export interface AsyncProps {
  loader: ComponentLoader
  props?: Record<string, any>
  loading?: React.ReactNode
}

const LoaderMap = new WeakMap()

export const Async = (props: AsyncProps) => {
  const { loader, loading = null, props: restProps = {} } = props
  if (!LoaderMap.has(loader)) {
    LoaderMap.set(loader, React.lazy(loader))
  }
  const Component = LoaderMap.get(loader)
  return (
    <React.Suspense fallback={loading}>
      <Component {...restProps} />
    </React.Suspense>
  )
}
