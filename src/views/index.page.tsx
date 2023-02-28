import { Slot } from '@/slot'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()
  const text = t('helloworld', { ns: 'core' })
  return (
    <Slot ctx={{ text }} fallback={<h1>{text}</h1>}>
      {(slot) => slot.home}
    </Slot>
  )
}

export default IndexPage
