import React from 'react'

interface AsyncProps {
  loader: Promise<{ default: React.ComponentType }>
  fallback?: React.ReactNode
}

export const Async = (props: AsyncProps) => {
  const { loader, fallback } = props
  const Component = React.lazy(() => loader)
  return (
    <React.Suspense fallback={fallback}>
      <Component />
    </React.Suspense>
  )
}
