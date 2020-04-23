import React from 'react'
import { connect } from 'react-redux'
import { AddressStoreState, AddressItem } from '../types'
import { AddressListItem } from '../components'

interface TypeProps {
  Address: AddressStoreState
}

interface TypeState {
  popStyle: {
    top: number
    left: number
  }
  popView: boolean
  addressId: number
}

class AddressList extends React.Component<TypeProps, TypeState> {
  state: TypeState = {
    popStyle: {
      top: 0,
      left: 0,
    },
    popView: false,
    addressId: 0,
  }

  onSettingClick(event: any, id: number) {
    event.preventDefault()

    if (this.state.popView) {
      if (this.state.addressId === id) {
        this.setState({
          popView: false,
        })
      } else {
        this.setState({
          addressId: id,
          popStyle: {
            top: event.target.offsetTop,
            left: event.target.offsetLeft,
          },
        })
      }
    } else {
      this.setState({
        popView: true,
        popStyle: {
          top: event.target.offsetTop,
          left: event.target.offsetLeft,
        },
        addressId: id,
      })
    }
  }

  render(): React.ReactElement {
    const { Address } = this.props

    return (
      <>
        <ul className="address-list">
          {Address.addresses.slice(0, 5).map((item: AddressItem) => (
            <li key={item.id}>
              <AddressListItem item={item} defaultId={Address.default} onClick={(event: any, id: number) => this.onSettingClick(event, id)} />
            </li>
          ))}
        </ul>
        {this.state.popView && (
          <div style={this.state.popStyle} className="address-setting-pop">
            <button>기본 배송지 설정</button>
            <button>삭제</button>
          </div>
        )}
      </>
    )
  }
}

export default connect(({ Address }: TypeProps) => ({
  Address,
}))(AddressList)
