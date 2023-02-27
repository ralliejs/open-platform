import { Slot } from '@/slot'
import { useIntl } from 'react-intl'

const IndexPage = () => {
  const intl = useIntl()
  const text = intl.formatMessage({
    id: 'core.helloworld',
  })
  return (
    <Slot ctx={{ text }} fallback={<h1>{text}</h1>}>
      {(slot) => slot.home}
    </Slot>
  )
}

export default IndexPage
