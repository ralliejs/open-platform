import { Slot } from '@/slot'
import { Button } from 'antd'

export default function SettingsPage() {
  return (
    <Slot selector={(slot) => slot.setting}>
      <Button type="primary">Settings</Button>
    </Slot>
  )
}
