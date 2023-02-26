import { useBlockState } from '@rallie/react'
import React from 'react'
import { core, CoreType } from '~/blocks/core'
import { ComponentLoader } from '~/typings'
import { Async } from './async'
import { ErrorBoundary } from './error-boundary'

interface SlotProps {
  selector: (slot: CoreType['state']['slot']) => ComponentLoader
  fallback?: React.ReactNode
  errorMessage?: React.ReactNode
  children?: React.ReactNode
}

export const Slot = (props: SlotProps) => {
  const { selector, fallback, errorMessage = '插件资源出错，请联系管理员', children = null } = props
  const loader = useBlockState(core, (state) => selector(state.slot))
  if (loader) {
    return (
      <ErrorBoundary fallback={fallback} errorMessage={errorMessage}>
        <Async loader={loader} />
      </ErrorBoundary>
    )
  } else {
    return <>{children}</>
  }
}
