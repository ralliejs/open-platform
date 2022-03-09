import ReactDOM from 'react-dom'
import { Button } from 'antd'
import StoresProvider from '~/components/common/stores-provider'

import '~/styles/index.less'
import 'normalize.css'

ReactDOM.render(
  <>
    1232
    <StoresProvider>
      <Button>Hello World</Button>
    </StoresProvider>
  </>,
  document.getElementById('root'),
)
