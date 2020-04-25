import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAddress } from '../reducers/Address'
import { addToast } from '../reducers/Toast'
import { TextInput, CheckBox } from '../components'

interface TypeProps {
  onClose: Function
}

const AddForm: React.FC<TypeProps> = (props: TypeProps) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [postnumber, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [check, setCheck] = useState(false)
  // const [nameVali, setNameVali] = useState(false)

  const onSubimt = (event: React.MouseEvent): void => {
    event.preventDefault()

    dispatch(
      addAddress(
        {
          postnumber,
          name,
          address,
        },
        check,
      ),
    )
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
      <form>
        <TextInput
          className="form-item"
          placeholder="받는 사람"
          value={name}
          onChange={(value: string): void => setName(value)}
        />
        <TextInput
          type="number"
          className="form-item"
          placeholder="우편번호"
          value={postnumber}
          onChange={(value: string): void => setNumber(value)}
        />
        <TextInput
          className="form-item"
          placeholder="주소"
          value={address}
          onChange={(value: string): void => setAddress(value)}
        />
        <CheckBox
          className="form-item check"
          label="기본 배송지로 등록"
          value={check}
          onChange={(value: boolean): void => setCheck(value)}
        />
        <button onClick={onSubimt}>등록 완료</button>
      </form>
    </div>
  )
}

export default AddForm
