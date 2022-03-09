import React from 'react'
import type { Container } from 'unstated-next'

interface RecursiveProviderProps {
  providers: Array<Container<any, any>['Provider']>
}

const RecursiveProvider: React.FunctionComponent<RecursiveProviderProps> = ({ providers = [], children }) => {
  if (providers.length === 0) {
    return <>{children}</>
  } else {
    const [ParentProvider, ...childrenProviders] = providers
    return (
      <ParentProvider>
        <RecursiveProvider providers={childrenProviders}>
          {children}
        </RecursiveProvider>
      </ParentProvider>
    )
  }
}
// 自动注册stores目录下的所有Provider
const importFile = require.context('~/stores', true, /\.(tsx|ts|jsx|js)$/)
const files = importFile.keys()
const providers = files.map((item) => importFile(item)?.default?.Provider).filter(Boolean)
const StoresProvider: React.FunctionComponent = ({ children }) => <RecursiveProvider providers={providers}>{children}</RecursiveProvider>

export default StoresProvider
