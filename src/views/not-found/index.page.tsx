import { useBlockState } from '@rallie/react'
import { Result, Button } from 'antd'
import { core } from '~/blocks/core'
import { useNavigate } from 'react-router-dom'
import { GlobalLoading } from './global-loading'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const isPluginsLoaded = useBlockState(core, (state) => state.pluginsLoaded)
  const navigate = useNavigate()
  const { t } = useTranslation('core')
  return isPluginsLoaded ? (
    <Result
      status="404"
      title="404"
      subTitle={t('not-found.subTitle')}
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          {t('not-found.backHome')}
        </Button>
      }
    />
  ) : (
    <GlobalLoading />
  )
}
