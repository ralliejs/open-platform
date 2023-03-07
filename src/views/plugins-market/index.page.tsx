import { useBlockState } from '@rallie/react'
import { Button, Input, Modal, Form, Card, Avatar, Tooltip } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'
import { core } from '~/blocks/core'
import { LocalStorage } from '~/utils/local-storage'
// @ts-ignore
import defaultPluginImage from '~/assets/default-plugin-image.svg'

const installedPlugins: string[] = LocalStorage.touch('installedPlugins', [])

interface PluginCardProps {
  id: string
  onDelete: (id: string) => void
}

const PluginCard = (props: PluginCardProps) => {
  const { id, onDelete } = props
  const { t } = useTranslation(id)
  const { t: coreTranslate } = useTranslation('core')
  const { titleKey, descriptionKey } = useBlockState(core, (state) => {
    const info = state.addOns.pluginInfo[id]
    return {
      titleKey: info?.title,
      descriptionKey: info?.description,
    }
  })
  const title = titleKey ? t(titleKey) : coreTranslate('plugin-market.defaultPluginTitle')
  const description = descriptionKey
    ? t(descriptionKey)
    : coreTranslate('plugin-market.defaultPluginDescription')
  const delayButton = (
    <Button
      type="ghost"
      onClick={() => {
        onDelete(id)
        location.reload()
      }}
    >
      {coreTranslate('common.delete')}
    </Button>
  )
  const avatar = (
    <Tooltip title={id}>
      <Avatar shape="square" src={defaultPluginImage} />
    </Tooltip>
  )
  return (
    <Card style={{ width: 350, margin: '20px 20px 20px 0px' }} actions={[delayButton]}>
      <Card.Meta avatar={avatar} title={title} description={description} />
    </Card>
  )
}

export default function PluginsMarket() {
  const { t } = useTranslation('core')
  const [modalOpen, setModalOpen] = React.useState(false)
  const [plugins, setPlugins] = useImmer(installedPlugins)
  const [form] = Form.useForm()
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    LocalStorage.set('installedPlugins', Array.from(new Set(plugins)))
  }, [plugins])
  const onAdd = () => {
    form
      .validateFields()
      .then(() => {
        const newPluginId = form.getFieldValue('id')
        setLoading(true)
        core
          .activate(newPluginId)
          .then(() => {
            setPlugins((plugins) => {
              plugins.push(newPluginId)
            })
          })
          .catch(() => {})
          .finally(() => {
            setModalOpen(false)
          })
      })
      .catch(() => {})
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
        {t('plugin-market.addPlugin')}
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
        title={t('plugin-market.addPlugin')}
        open={modalOpen}
        destroyOnClose
        onCancel={() => {
          setModalOpen(false)
        }}
        onOk={onAdd}
        okButtonProps={{
          loading,
        }}
        afterClose={() => {
          form.resetFields()
          setLoading(false)
        }}
      >
        <Form form={form}>
          <Form.Item
            label={t('plugin-market.pluginID')}
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
                    callback(t('plugin-market.wrongFormat'))
                  }
                },
              },
            ]}
          >
            <Input placeholder={t('plugin-market.placeholder')} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
