import { Async } from '@/async'
import { useBlockState } from '@rallie/react'
import { core } from '~/blocks/core'

const IndexPage = () => {
  const homeLoader = useBlockState(core, (state) => state.home)
  if (homeLoader) {
    return <Async loader={homeLoader} />
  } else {
    return <h1>首页</h1>
  }
}

export default IndexPage
