import React, { useState, useEffect } from 'react'

interface TypeProps {
  children: React.ReactNode
  if: boolean
  animation?: string
}

const Maybe: React.FC<TypeProps> = (props: TypeProps) => {
  const [view, setView] = useState(false)
  const [on, setOn] = useState('')

  useEffect(() => {
    if (props.animation && props.if) {
      setView(props.if)

      setTimeout(() => {
        setOn('on')
      }, 150)
    }

    if (!!on && !props.if) {
      setOn('')

      setTimeout(() => {
        setView(props.if)
      }, 150)
    }
  })

  if (props.animation) {
    return view ? (
      <>
        {React.Children.map(props.children, (item: any) =>
          React.cloneElement(item, {
            ...item.props,
            className: `${item.props.className} transition-${props.animation} ${on}`,
          }),
        )}
      </>
    ) : (
      <></>
    )
  }

  return props.if ? <>{props.children}</> : <></>
}

export default Maybe
