import React from 'react'
import Maybe from './Maybe'
import { useSystemState, useSystemDispatch } from '../contexts'

const Confirm: React.FC = () => {
  const { confirmInfo } = useSystemState()
  const dispatch = useSystemDispatch()
  const onClose = (): void => {
    dispatch({
      type: 'CONFIRM_ON_OFF',
      payload: {
        ...confirmInfo,
        view: false,
      },
    })
  }
  const onConfirm = (): void => {
    dispatch({
      type: 'CONFIRM_ON_OFF',
      payload: {
        ...confirmInfo,
        confirm: true,
      },
    })

    onClose()
  }

  return (
    <Maybe if={confirmInfo.view}>
      <div className="confirm" onClick={onClose}>
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
