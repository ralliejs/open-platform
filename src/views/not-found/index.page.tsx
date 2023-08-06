import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const navigate = useNavigate()
  const { t } = useTranslation('core')
  return (
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
  )
}
