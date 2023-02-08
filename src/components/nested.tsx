import React from 'react'

interface NestedProps {
  elements: Array<React.ReactElement>
  children?: React.ReactNode
}

/**
 * 把elements转化为嵌套结构，这样嵌套组件树有调整时，只需要修改elements即可，不需要直接调整JSX结构
 */
export const Nested = (props: NestedProps) => {
  const { elements = [], children = null } = props
  if (elements.length === 0) {
    return <>{children}</>
  } else {
    const [parentElements, ...childrenElements] = elements
    return React.cloneElement(parentElements, {}, <Nested elements={childrenElements}>{children}</Nested>)
  }
}
