import { Button, Input, Modal, List } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'
import { core } from '~/blocks/core'

const installedPlugins: string[] = JSON.parse(localStorage.getItem('installedPlugins'))

export default function SettingsPage() {
  const intl = useTranslation('core')
  const [modalOpen, setModalOpen] = React.useState(false)
  const [newName, setNewName] = React.useState('')
  const [plugins, setPlugins] = useImmer(installedPlugins)
  React.useEffect(() => {
    localStorage.setItem('installedPlugins', JSON.stringify(Array.from(new Set(plugins))))
  }, [plugins])
  const onAdd = () => {
    setModalOpen(false)
    core.activate(newName).then(() => {
      if (!plugins.includes(newName)) {
        setPlugins((plugins) => {
          plugins.push(newName)
        })
      }
    })
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setModalOpen(true)
        }}
      >
        {intl.t('settings.addPlugin')}
      </Button>
      <List>
        {plugins.map((plugin) => (
          <List.Item key={plugin}>{plugin}</List.Item>
        ))}
      </List>
      <Modal
        title="请输入插件名称"
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false)
        }}
        onOk={onAdd}
      >
        <Input
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value)
          }}
        />
      </Modal>
    </div>
  )
}
