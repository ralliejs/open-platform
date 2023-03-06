import { Slot } from '@/slot'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation('core')
  const text = t('home.helloWorld')
  return (
    <Slot ctx={{ text }} fallback={<h1>{text}</h1>}>
      {(slots) => slots.home}
    </Slot>
  )
}

export default IndexPage
