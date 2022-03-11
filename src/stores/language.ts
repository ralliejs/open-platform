/**
 * 说明：应用语言
 */
import React from 'react'
import { createContainer } from 'unstated-next'
import { useImmer } from 'use-immer'

interface LanguageValue {
  value: string
}

const initialValue: LanguageValue = {
  value: 'zh-CN',
}

export default createContainer(() => {
  const [language, setLanguage] = useImmer<LanguageValue>(initialValue)
  return {
    language: language.value,
    setLanguage: React.useCallback(
      (value: string) => {
        setLanguage((draft) => {
          draft.value = value
        })
      },
      [setLanguage],
    ),
  }
})
