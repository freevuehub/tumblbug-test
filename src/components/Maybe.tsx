import React, { useState, useEffect } from 'react'

interface TypeProps {
  children: React.ReactNode
  if: boolean
  animation?: string
}

const Maybe: React.FC<TypeProps> = (props: TypeProps) => {
  const [view, setView] = useState(false)
  const [on, setOn] = useState('')

  const changeView = (value: boolean): void => setView(value)
  const changeOn = (value: string): void => setOn(value)

  useEffect(() => {
    if (props.animation && props.if) {
      changeView(props.if)

      setTimeout(() => {
        changeOn('on')
      }, 100)
    }

    if (!!on && !props.if) {
      changeOn('')

      setTimeout(() => {
        changeView(props.if)
      }, 150)
    }
  })

  if (props.animation) {
    return view ? (
      <>
        {React.Children.map(props.children, (item: any) => {
          return React.cloneElement(item, {
            ...item.props,
            className: `${item.props.className} transition-${props.animation} ${on}`,
          })
        })}
      </>
    ) : (
      <></>
    )
  }

  return props.if ? <>{props.children}</> : <></>
}

export default Maybe
