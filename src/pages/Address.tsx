import React from 'react'

class Address extends React.PureComponent {
  onAddressAdd() {
    console.log('aa', this)
  }

  render(): React.ReactElement {
    return (
      <div className="content">
        <div className="header">
          <h2>등록된 배송지</h2>
          <button onClick={this.onAddressAdd}>+ 추가</button>
        </div>
      </div>
    )
  }
}

export default Address
