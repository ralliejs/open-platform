import { Slot } from '@/slot'

const IndexPage = () => {
  const text = 'Hello World!'
  return (
    <Slot ctx={{ text }} fallback={<h1>{text}</h1>}>
      {(slot) => slot.home}
    </Slot>
  )
}

export default IndexPage
