import { Slot } from '@/slot'

const IndexPage = () => {
  return <Slot selector={(slot) => slot.home}>首页</Slot>
}

export default IndexPage
