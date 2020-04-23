import React from 'react'
import { connect } from 'react-redux'
import { AddressStoreState, AddressItem } from '../types'

interface TypeProps {
  Address: AddressStoreState
}

class AddressList extends React.PureComponent<TypeProps> {
  render(): React.ReactElement {
    const { Address } = this.props

    console.log(Address)

    return (
      <ul className="address-list">
        {Address.addresses.slice(0, 5).map((item: AddressItem) => (
          <li key={item.id}>
            <div className="info">
              <h5>[{item.postnumber}]</h5>
              <p>{item.address}</p>
            </div>
            <button>&sdot;&sdot;&sdot;</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(({ Address }: TypeProps) => ({
  Address,
}))(AddressList)
