import React from 'react'
import { TextInput, CheckBox } from '../components'

class AddForm extends React.PureComponent {
  render(): React.ReactElement {
    return (
      <div className="content">
        <div className="form">
          <form>
            <TextInput className="form-item" placeholder="받는 사람" />
            <TextInput className="form-item" placeholder="우편번호" />
            <TextInput className="form-item" placeholder="주소" />
            <CheckBox className="form-item check" label="기본 배송지로 등록" />
            <button>등록 완료</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddForm
