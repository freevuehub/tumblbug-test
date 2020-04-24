import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastStoreState } from '../types'
import { removeToast } from '../reducers/Toast'
import { Maybe } from '../components'

interface TypeHooks {
  Toast: ToastStoreState
}

const Toast: React.FC = () => {
  const { view, type, message } = useSelector(({ Toast }: TypeHooks) => Toast)
  const dispatch = useDispatch()
  const [on, setOn] = useState('')

  useEffect(() => {
    let timer

    if (view) {
      clearTimeout(timer)

      setOn('on')

      timer = setTimeout(() => {
        console.log(on)
        setOn('')
        dispatch(removeToast())
      }, 3000)
    }
  })

  if (view) {
    // let timer
    // if (!timer) {
    //   timer = setTimeout(() => {
    //     dispatch(removeToast())
    //   }, 3000)
    // }
  }

  return (
    <div className={`toast-list ${on}`}>
      <Maybe if={view}>
        <div className={`toast-item ${type}`}>{message}</div>
      </Maybe>
    </div>
  )
}

export default Toast
