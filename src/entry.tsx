import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import StoresProvider from '~/components/common/stores-provider'
import Recursive from '~/components/common/recursive'
import Routers from '~/components/common/router'

import '~/styles/index.less'
import 'normalize.css'

ReactDOM.render(
  <React.Suspense fallback={null}>
    <StoresProvider>
      <Recursive components={[Routers]}>
        <Button>Hello World</Button>
      </Recursive>
    </StoresProvider>
  </React.Suspense>,
  document.getElementById('root'),
)
