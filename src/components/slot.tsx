import { useBlockState } from '@rallie/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { core, CoreType } from '~/blocks/core'
import { ComponentLoader } from '~/typings'
import { Async, AsyncProps } from './async'
import { ErrorBoundary, ErrorBoundaryProps } from './error-boundary'

interface SlotProps {
  /**
   * 插槽加载时的loading组件
   */
  loading?: AsyncProps['loading']
  /**
   * 插槽不存在或出错时的回退组件
   */
  fallback?: React.ReactNode
  /**
   * 插槽出错时的回调
   */
  onError?: ErrorBoundaryProps['onError']
  /**
   * 传递给插槽组件的上下文
   */
  ctx?: Record<string, any>
  /**
   * 插槽loader选择器
   */
  children: (slot: CoreType['state']['slot']) => ComponentLoader
}

export const Slot = (props: SlotProps) => {
  const { children, fallback, onError, ctx = {} } = props
  const intl = useTranslation()
  const slotProps = {
    ...ctx,
    intl,
  }
  const loader = useBlockState(core, (state) => children(state.slot))
  if (loader) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Async loader={loader} props={slotProps} />
      </ErrorBoundary>
    )
  } else {
    return <>{fallback || null}</>
  }
}
