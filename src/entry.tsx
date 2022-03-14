import ReactDOM from 'react-dom'
import StoresProvider from '~/components/system/stores-provider'
import Nested from '~/components/common/nested'
import Routes, { Router } from '~/components/system/routes'

import '~/styles/index.less'
import 'normalize.css'

ReactDOM.render(
  <Nested components={[StoresProvider, Router]}>
    <Routes />
  </Nested>,
  document.getElementById('root'),
)
