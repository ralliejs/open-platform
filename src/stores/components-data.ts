import { createContainer } from "unstated-next";
import { useImmer } from 'use-immer'

interface ComponentsDataValue {

}

const initialValue: ComponentsDataValue = {

}

export default createContainer(() => {
  const [componentsData, setComponentsData] = useImmer<ComponentsDataValue>(initialValue)
  return {
    componentsData,
    setComponentsData
  }
})
