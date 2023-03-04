import { useBlockState } from '@rallie/react'
import { Result, Button } from 'antd'
import { core } from '~/blocks/core'
import { useNavigate } from 'react-router-dom'
import { GlobalLoading } from './global-loading'

export default function NotFound() {
  const isPluginsLoaded = useBlockState(core, (state) => state.pluginsLoaded)
  const applications = useBlockState(core, (state) => state.applications)
  console.log(isPluginsLoaded, JSON.stringify(applications, null, 2))
  const navigate = useNavigate()
  return isPluginsLoaded ? (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          Back Home
        </Button>
      }
    />
  ) : (
    <>
      <div style={{ display: 'none' }}>{applications.toString()}</div>
      <GlobalLoading />
    </>
  )
}
