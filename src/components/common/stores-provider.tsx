import React from 'react'
import Recursive from '~/components/common/recursive'

// 自动注册stores目录下的所有Provider
const importFile = require.context('~/stores', true, /\.(tsx|ts|jsx|js)$/)
const files = importFile.keys()
const providers = files.map((item) => importFile(item)?.default?.Provider).filter(Boolean)
const StoresProvider: React.FunctionComponent<{}> = ({ children }) => <Recursive components={providers}>{children}</Recursive>

export default StoresProvider
