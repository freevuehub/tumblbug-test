import React, { useEffect } from 'react'
import { ToastItem } from '../types'
import Maybe from './Maybe'

interface TypeProps {
  item: ToastItem
  onClose: Function
}

const ToastListItem: React.FC<TypeProps> = (props: TypeProps) => {
  useEffect(() => {
    if (props.item.view) {
      setTimeout(() => {
        setTimeout(() => {
          props.onClose(props.item.id)
        }, 150)
      }, 3000)
    }
  })

  return (
    <Maybe if={props.item.view} animation="slide">
      <div className={`toast-item ${props.item.type}`}>{props.item.message}</div>
    </Maybe>
  )
}

export default ToastListItem
