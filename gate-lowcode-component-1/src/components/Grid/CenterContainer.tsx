import React from 'react'

interface CenterContainerProps {
  selfClassName?: string
  children: React.ReactNode
}

const CenterContainer: React.FC<CenterContainerProps> = props => {
  const { children, selfClassName } = props
  return <div className={`flex--grid--layout ${selfClassName || ''}`}>{children}</div>
}

export default CenterContainer
