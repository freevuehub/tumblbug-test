import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../reducers/Address'
import { loadAddress } from '../axios'
import { AddressStoreState } from '../types'

interface TypeAddress {
  Address: AddressStoreState
}
interface TypeProps extends TypeAddress {
  fetchAddress: Function
}

class Address extends React.PureComponent<TypeProps> {
  async componentDidMount() {
    const { fetchAddress } = this.props
    const { data }: any = await loadAddress()

    fetchAddress(data)
  }

  onAddressAdd() {
    console.log('aa', this)
  }

  render(): React.ReactElement {
    const { Address } = this.props

    return (
      <div className="content">
        <div className="header">
          <h2>등록된 배송지</h2>
          <button onClick={this.onAddressAdd}>+ 추가</button>
        </div>
        <ul>
          {Address.addresses.map((item: any) => (
            <li key={item.id}>{item.address}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  ({ Address }: TypeAddress) => ({
    Address,
  }),
  (dispatch) => ({
    fetchAddress: (data: AddressStoreState) => dispatch(fetchAddress(data)),
  }),
)(Address)
