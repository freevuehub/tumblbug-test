import React from 'react'
import Maybe from './Maybe'
import { useSystemState, useSystemDispatch } from '../contexts'

const Confirm: React.FC = () => {
  const { confirmInfo } = useSystemState()
  const dispatch = useSystemDispatch()
  const onClose = (event: React.MouseEvent): void => {
    event.stopPropagation()

    dispatch({
      type: 'CONFIRM_UPDATE',
      payload: {
        ...confirmInfo,
        view: false,
      },
    })
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
