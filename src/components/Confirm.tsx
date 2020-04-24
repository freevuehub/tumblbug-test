import React, { useState, useEffect } from 'react'
import Maybe from './Maybe'
import { useSystemState, useSystemDispatch } from '../contexts'

const Confirm: React.FC = () => {
  const { confirmInfo } = useSystemState()
  const dispatch = useSystemDispatch()
  const [on, setOn] = useState('')

  useEffect(() => {
    if (confirmInfo.view) {
      setOn('on')
    } else {
      setOn('')
    }
  })

  const onClose = (event: React.MouseEvent): void => {
    event.stopPropagation()

    const { target, currentTarget } = event

    if (target === currentTarget) {
      dispatch({
        type: 'CONFIRM_UPDATE',
        payload: {
          ...confirmInfo,
          view: false,
        },
      })
    }
  }
  const onConfirm = async (event: React.MouseEvent): Promise<void> => {
    event.stopPropagation()

    await dispatch({
      type: 'CONFIRM_UPDATE',
      payload: {
        ...confirmInfo,
        confirm: true,
        view: false,
      },
    })
  }

  return (
    <Maybe if={confirmInfo.view}>
      <div className={`confirm ${on}`} onClick={onClose}>
        <div className="wrap">
          <div className="description">
            <p>{confirmInfo.text}</p>
          </div>
          <div className="remote">
            <button onClick={onConfirm}>확인</button>
            <button onClick={onClose}>취소</button>
          </div>
        </div>
      </div>
    </Maybe>
  )
}

export default Confirm
