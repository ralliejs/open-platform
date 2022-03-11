import React from 'react'
import ReactDOM from 'react-dom'
import StoresProvider from '~/components/common/stores-provider'
import Recursive from '~/components/common/recursive'
import Routes from '~/components/common/routes'
import { HashRouter } from 'react-router-dom'

import '~/styles/index.less'
import 'normalize.css'

ReactDOM.render(
  <React.Suspense fallback={null}>
    <Recursive components={[StoresProvider, HashRouter]}>
      <Routes />
    </Recursive>
  </React.Suspense>,
  document.getElementById('root'),
)
