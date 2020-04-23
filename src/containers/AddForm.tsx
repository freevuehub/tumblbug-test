import React from 'react'
import { TextInput, CheckBox } from '../components'

interface TypeState {
  form: {
    name: string
    addressNumber: string
    address: string
    defaultCheck: boolean
  }
  vali: any
}

class AddForm extends React.PureComponent<{}, TypeState> {
  state: TypeState = {
    form: {
      name: '',
      addressNumber: '',
      address: '',
      defaultCheck: false,
    },
    vali: {
      name: [(val: string): boolean => !!val],
      addressNumber: [(val: string): boolean => !!val],
      address: [(val: string): boolean => !!val, (val: string): boolean => val.length <= 25],
    },
  }

  onAdressAdd(event: React.MouseEvent): void {
    event.preventDefault()

    console.log(this.state)
  }

  render(): React.ReactElement {
    const { form } = this.state
    const { name, addressNumber, address, defaultCheck } = form

    return (
      <div className="content">
        <div className="form">
          <form>
            <TextInput
              className="form-item"
              placeholder="받는 사람"
              value={name}
              onChange={(value: string): void => this.setState({ form: { ...form, name: value } })}
            />
            <TextInput
              type="number"
              className="form-item"
              placeholder="우편번호"
              value={addressNumber}
              onChange={(value: string): void =>
                this.setState({ form: { ...form, addressNumber: value } })
              }
            />
            <TextInput
              className="form-item"
              placeholder="주소"
              value={address}
              onChange={(value: string): void =>
                this.setState({ form: { ...form, address: value } })
              }
            />
            <CheckBox
              className="form-item check"
              label="기본 배송지로 등록"
              value={defaultCheck}
              onChange={(value: boolean): void =>
                this.setState({ form: { ...form, defaultCheck: value } })
              }
            />
            <button onClick={(event): void => this.onAdressAdd(event)}>등록 완료</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddForm
