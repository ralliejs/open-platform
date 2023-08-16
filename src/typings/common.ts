import type React from 'react'

export type ComponentLoader = Parameters<typeof React.lazy>[0]
