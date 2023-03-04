import { useBlockState } from '@rallie/react'
import { Button, Input, Modal, Form, Card } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'
import { core } from '~/blocks/core'
import { LocalStorage } from '~/utils/local-storage'

const installedPlugins: string[] = LocalStorage.touch('installedPlugins', [])

interface PluginCardProps {
  id: string
  onDelete: (id: string) => void
}

const PluginCard = (props: PluginCardProps) => {
  const { id, onDelete } = props
  const { title, description } = useBlockState(core, (state) => {
    const info = state.addOns.pluginInfo[id]
    return {
      title: info?.title || '未命名插件',
      description: info?.description || '',
    }
  })
  const delayButton = (
    <Button
      type="ghost"
      onClick={() => {
        onDelete(id)
        location.reload()
      }}
    >
      删除
    </Button>
  )
  return (
    <Card style={{ width: 300, margin: '20px 20px 20px 0px' }} actions={[delayButton]}>
      <Card.Meta title={`${title}@${id}`} description={description} />
    </Card>
  )
}

export default function PluginsMarket() {
  const intl = useTranslation('core')
  const [modalOpen, setModalOpen] = React.useState(false)
  const [plugins, setPlugins] = useImmer(installedPlugins)
  const [form] = Form.useForm()
  React.useEffect(() => {
    LocalStorage.set('installedPlugins', Array.from(new Set(plugins)))
  }, [plugins])
  const onAdd = () => {
    form
      .validateFields()
      .then(() => {
        const newPluginId = form.getFieldValue('id')
        core
          .activate(newPluginId)
          .then(() => {
            setPlugins((plugins) => {
              plugins.push(newPluginId)
            })
          })
          .catch(() => {})
      })
      .catch(() => {})
    setModalOpen(false)
  }
  const onDelete = (id: string) => {
    const index = plugins.indexOf(id)
    if (index >= 0) {
      setPlugins((plugins) => {
        plugins.splice(index, 1)
        console.log(plugins)
      })
    }
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
      <div
        style={{
          display: 'flex',
        }}
      >
        {plugins.map((id) => (
          <PluginCard key={id} id={id} onDelete={onDelete} />
        ))}
      </div>
      <Modal
        title="新增插件"
        open={modalOpen}
        destroyOnClose
        onCancel={() => {
          setModalOpen(false)
        }}
        onOk={onAdd}
      >
        <Form form={form}>
          <Form.Item
            label="插件ID"
            name={['id']}
            rules={[
              {
                required: true,
                validator(rule, value, callback) {
                  const [owner, repo] = value.split('/')
                  if (owner && repo) {
                    callback()
                  } else {
                    // eslint-disable-next-line n/no-callback-literal
                    callback('格式错误')
                  }
                },
              },
            ]}
          >
            <Input placeholder="github用户名/github仓库名" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
