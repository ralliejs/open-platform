import { createBlock } from '@rallie/block'

const mockBlock = createBlock('mock')
const coreBlock = mockBlock.connect('core')

mockBlock.relyOn([coreBlock.name]).onActivate(() => {
  console.log('')
})
