import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastStoreState } from '../types'
import { removeToast } from '../reducers/Toast'
import { Maybe } from '../components'

interface TypeHooks {
  Toast: ToastStoreState
}

const Toast: React.FC = () => {
  const { view, type, text } = useSelector(({ Toast }: TypeHooks) => Toast)
  const dispatch = useDispatch()

  if (view) {
    let timer

    if (!timer) {
      timer = setTimeout(() => {
        dispatch(removeToast())
      }, 3000)
    }
  }

  return (
    <div className="toast-list">
      <Maybe if={view}>
        <div className={`toast-item ${type}`}>{text}</div>
      </Maybe>
    </div>
  )
}

export default Toast
