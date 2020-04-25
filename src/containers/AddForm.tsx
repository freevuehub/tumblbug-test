import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useSystemState, useSystemDispatch } from '../contexts'
import { addAddress } from '../reducers/Address'
import { addToast } from '../reducers/Toast'
import { TextInput, CheckBox } from '../components'

interface TypeProps {
  onClose: Function
}

const AddForm: React.FC<TypeProps> = (props: TypeProps) => {
  const dispatch = useDispatch()

  const [formData, setData] = useState({
    name: '',
    postnumber: '',
    address: '',
  })
  const [check, setCheck] = useState(false)

  const required = (value: string | number): boolean => !!value
  const max25 = (value: string | number): boolean => `${value}`.length < 25

  const onSubimt = (event: React.FormEvent): void => {
    event.preventDefault()

    dispatch(addAddress(formData, check))
    dispatch(
      addToast({
        message: '추가되었습니다.',
        view: true,
        type: 'sucess',
      }),
    )

    props.onClose(event)
  }

  return (
    <div className="form">
      <form onSubmit={onSubimt}>
        <TextInput
          className="form-item"
          placeholder="받는 사람"
          value={formData.name}
          onChange={(value: string): void => {
            setData({ ...formData, name: value })
          }}
          validation={[required]}
          hint={['필수 입력값입니다.']}
        />
        <TextInput
          type="number"
          className="form-item"
          placeholder="우편번호"
          value={formData.postnumber}
          onChange={(value: string): void => {
            setData({ ...formData, postnumber: value })
          }}
          validation={[required]}
          hint={['필수 입력값입니다.']}
        />
        <TextInput
          className="form-item"
          placeholder="주소"
          value={formData.address}
          onChange={(value: string): void => {
            setData({ ...formData, address: value })
          }}
          validation={[required, max25]}
          hint={['필수 입력값입니다.', '최대 입력값을 초과하였습니다.']}
        />
        <CheckBox
          className="form-item check"
          label="기본 배송지로 등록"
          value={check}
          onChange={(value: boolean): void => setCheck(value)}
        />
        <button>등록 완료</button>
      </form>
    </div>
  )
}

export default AddForm
