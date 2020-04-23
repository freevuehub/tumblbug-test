import React from 'react'
import { TextInput, CheckBox } from '../components'

interface TypeState {
  name: string
  addressNumber: string
  address: string
  defaultCheck: boolean
}

class AddForm extends React.PureComponent<{}, TypeState> {
  state: TypeState = {
    name: '',
    addressNumber: '',
    address: '',
    defaultCheck: false,
  }

  onAdressAdd(event: React.MouseEvent): void {
    event.preventDefault()

    console.log(this.state)
  }

  render(): React.ReactElement {
    const { name, addressNumber, address, defaultCheck } = this.state

    return (
      <div className="content">
        <div className="form">
          <form>
            <TextInput
              className="form-item"
              placeholder="받는 사람"
              value={name}
              onChange={(value: string): void => this.setState({ name: value })}
            />
            <TextInput
              type="number"
              className="form-item"
              placeholder="우편번호"
              value={addressNumber}
              onChange={(value: string): void => this.setState({ addressNumber: value })}
            />
            <TextInput
              className="form-item"
              placeholder="주소"
              value={address}
              onChange={(value: string): void => this.setState({ address: value })}
            />
            <CheckBox
              className="form-item check"
              label="기본 배송지로 등록"
              value={defaultCheck}
              onChange={(value: boolean): void => this.setState({ defaultCheck: value })}
            />
            <button onClick={(event): void => this.onAdressAdd(event)}>등록 완료</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddForm
