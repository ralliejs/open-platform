import React from 'react'
import { ComponentLoader } from '~/typings'

interface AsyncProps {
  loader: ComponentLoader
  fallback?: React.ReactNode
}

export const Async = (props: AsyncProps) => {
  const { loader, fallback } = props
  if (typeof loader !== 'function') {
    console.warn(loader)
    return <div>出错了</div>
  }
  const Component = React.lazy(loader)
  return (
    <React.Suspense fallback={fallback}>
      <Component />
    </React.Suspense>
  )
}
