import { useTranslation } from '~/i18n'

const IndexPage = () => {
  const { t } = useTranslation()
  const text = t('home.helloWorld')
  return <div className="text-lg">{text}</div>
}

export default IndexPage
