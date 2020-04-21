import React from 'react'
import { fetchAddress } from '../axios'

class Address extends React.PureComponent {
  async componentDidMount() {
    const { data }: any = await fetchAddress()

    console.log(data)
    this.setState({
      ...this.state,
      addressList: data.address,
    })
  }

  onAddressAdd() {
    console.log('aa', this)
  }

  render(): React.ReactElement {
    console.log(this)
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
