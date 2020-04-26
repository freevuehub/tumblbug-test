import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAddress } from '../reducers/Address'
import { addToast } from '../reducers/Toast'
import { TextInput, CheckBox, Form } from '../components'

interface TypeProps {
  onClose: Function
}

interface TypeInputRef extends HTMLInputElement {
  valid: Function
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
  const max25 = (value: string | number): boolean => `${value}`.length <= 25

  const onSubmit = (err: boolean): void => {
    if (err) {
      return
    }

    dispatch(addAddress(formData, check))
    dispatch(
      addToast({
        message: '추가되었습니다.',
        view: true,
        type: 'sucess',
      }),
    )

    props.onClose()
  }

  return (
    <div className="form">
      <Form onSubmit={onSubmit}>
        <TextInput
          ref={React.useRef<TypeInputRef>(null)}
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
          ref={React.useRef<TypeInputRef>(null)}
          type="number"
          className="form-item"
          placeholder="우편번호"
          value={formData.postnumber}
          onChange={(value: string): void => {
            setData({ ...formData, postnumber: value })
          }}
          validation={[required, (val: string): boolean => val.length === 6]}
          hint={['필수 입력값입니다.', '우편번호 형식이 아닙니다.']}
        />
        <TextInput
          ref={React.useRef<TypeInputRef>(null)}
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
      </Form>
    </div>
  )
}

export default AddForm
