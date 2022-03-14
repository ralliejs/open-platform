/**
 * 说明：把一个组件List转化为组件树，这样嵌套组件树有调整时，只需要修改List即可，不需要直接调整JSX结构
 */
import React from 'react'

interface RecursiveComponentProps {
  components: Array<React.ComponentType<{ children: React.ReactNode }>>
  children?: React.ReactNode
}

const Nested: React.FunctionComponent<RecursiveComponentProps> = ({ components = [], children = null }) => {
  if (components.length === 0) {
    return <>{children}</>
  } else {
    const [ParentComponent, ...childrenComponents] = components
    return (
      <ParentComponent>
        <Nested components={childrenComponents}>{children}</Nested>
      </ParentComponent>
    )
  }
}

export default React.memo(Nested)
