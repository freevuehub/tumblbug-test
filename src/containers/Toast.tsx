import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastStoreState } from '../types'
import { removeToast } from '../reducers/Toast'
import { ToastListItem } from '../components'

interface TypeHooks {
  Toast: ToastStoreState
}

const Toast: React.FC = () => {
  const { list } = useSelector(({ Toast }: TypeHooks) => Toast)
  const dispatch = useDispatch()
  const onClose = (id: number): void => {
    dispatch(removeToast(id))
  }

  return (
    <div className={`toast-list ${'on'}`}>
      {list.map((item) => (
        <ToastListItem key={item.id} onClose={onClose} item={item} />
      ))}
    </div>
  )
}

export default Toast
