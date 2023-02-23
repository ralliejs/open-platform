import React from 'react'
import { ComponentLoader } from '~/typings'

interface AsyncProps {
  loader: ComponentLoader
  fallback?: React.ReactNode
}

const LoaderMap = new WeakMap()

export const Async = (props: AsyncProps) => {
  const { loader, fallback = null } = props
  if (!LoaderMap.has(loader)) {
    console.log(loader)
    LoaderMap.set(loader, React.lazy(loader))
  }
  const Component = LoaderMap.get(loader)
  return (
    <React.Suspense fallback={fallback}>
      <Component />
    </React.Suspense>
  )
}
