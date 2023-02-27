import React from 'react'

export interface ErrorBoundaryProps {
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  fallback?: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const { onError } = this.props
    console.error(error, errorInfo)
    onError?.(error, errorInfo)
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
