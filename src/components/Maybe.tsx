import React from 'react'

interface TypeProps {
  children: React.ReactNode
  if: boolean
}

const Maybe: React.FC<TypeProps> = (props: TypeProps) => <>{props.if ? props.children : <></>}</>

export default Maybe
