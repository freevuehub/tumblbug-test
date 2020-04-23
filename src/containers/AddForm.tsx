import React from 'react'
import { TextInput } from '../components'

class AddForm extends React.PureComponent {
  render(): React.ReactElement {
    return (
      <div className="content">
        <div className="form">
          <form>
            <TextInput placeholder="받는 사람" />
            <TextInput placeholder="우편번호" />
            <TextInput placeholder="주소" />
            <div>
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">기본 배송지로 등록</label>
            </div>
            <button>등록 완료</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddForm
