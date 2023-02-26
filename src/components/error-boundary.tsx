import React from 'react'
import { message } from 'antd'

export class ErrorBoundary extends React.PureComponent<
  {
    errorMessage?: React.ReactNode
    children: React.ReactNode
    fallback?: React.ReactNode
  },
  {
    hasError: boolean
  }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo)
    message.error(this.props.errorMessage || 'Something went wrong')
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}
