import React, { useState } from 'react'
import { TextInput, CheckBox } from '../components'

const AddForm: React.FC = () => {
  const [name, setName] = useState('')
  const [addressNumber, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [check, setCheck] = useState(false)

  const onSubimt = (event: React.MouseEvent): void => {
    event.preventDefault()

    console.log(name, addressNumber, address, check)
  }

  return (
    <div className="content">
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
            value={addressNumber}
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
    </div>
  )
}

export default AddForm
