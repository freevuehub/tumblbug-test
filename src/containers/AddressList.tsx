import React from 'react'
import { connect } from 'react-redux'
import { addViewCount } from '../reducers/Address'
import { AddressStoreState, AddressItem } from '../types'
import { AddressListItem, AddressSettingPop } from '../components'

interface TypeProps {
  Address: AddressStoreState
  addViewCount: Function
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

    if (this.state.popView && this.state.addressId === id) {
      this.setState({
        popView: false,
      })
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

  onMoreAddress(event: any) {
    event.preventDefault()

    this.props.addViewCount()
  }

  render(): React.ReactElement {
    const { Address } = this.props
    const { popView, popStyle } = this.state
    const sliceList = Address.addresses.slice(0, Address.viewCount)
    const moreBtnView = Address.addresses.length > sliceList.length

    return (
      <>
        <ul className="address-list">
          {sliceList.map((item: AddressItem) => (
            <li key={item.id}>
              <AddressListItem item={item} defaultId={Address.default} onClick={(event: any, id: number) => this.onSettingClick(event, id)} />
            </li>
          ))}
        </ul>
        {popView && <AddressSettingPop popStyle={popStyle} />}
        {moreBtnView && (
          <button className="more-btn" onClick={(event) => this.onMoreAddress(event)}>
            + 더 보기
          </button>
        )}
      </>
    )
  }
}

export default connect(
  ({ Address }: TypeProps) => ({
    Address,
  }),
  (dispatch) => ({
    addViewCount: () => dispatch(addViewCount()),
  }),
)(AddressList)
