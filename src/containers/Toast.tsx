import React from 'react'
import { useSelector } from 'react-redux'
import { ToastStoreState } from '../types'

interface TypeHooks {
  Toast: ToastStoreState
}

const Toast: React.FC = () => {
  const { list } = useSelector(({ Toast }: TypeHooks) => Toast)

  return (
    <div className="toast-list">
      {list.map((item) => (
        <div key={item.id} className="toast-item">
          {item.text}
        </div>
      ))}
    </div>
  )
}

export default Toast
