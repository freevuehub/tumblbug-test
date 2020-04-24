import React, { useEffect, useState } from 'react'
import { ToastItem } from '../types'

interface TypeProps {
  item: ToastItem
  onClose: Function
}

const ToastListItem: React.FC<TypeProps> = (props: TypeProps) => {
  const [on, setOn] = useState('')
  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (!mount) {
      setOn('on')

      setTimeout(() => {
        setOn('')

        setTimeout(() => {
          props.onClose(props.item.id)
        }, 150)
      }, 3000)
    }

    setMount(true)
  })

  return <div className={`toast-item ${props.item.type} ${on}`}>{props.item.message}</div>
}

export default ToastListItem
