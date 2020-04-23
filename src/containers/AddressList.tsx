import React from 'react'
import { connect } from 'react-redux'
import { addViewCount } from '../reducers/Address'
import { AddressStoreState, AddressItem } from '../types'
import { Maybe, AddressListItem, AddressSettingPop } from '../components'

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

  onSettingClick(event: React.MouseEvent, id: number): void {
    event.preventDefault()

    const { offsetTop, offsetLeft } = event.target as HTMLElement

    if (this.state.popView && this.state.addressId === id) {
      this.setState({
        popView: false,
      })
    } else {
      this.setState({
        popView: true,
        popStyle: {
          top: offsetTop,
          left: offsetLeft,
        },
        addressId: id,
      })
    }
  }

  onPopClose(): void {
    this.setState({
      popView: false,
    })
  }

  onDefaultAddressChange(event: React.MouseEvent): void {
    event.preventDefault()

    console.log(this.state.addressId)
  }

  onMoreAddress(event: React.MouseEvent): void {
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
              <AddressListItem
                item={item}
                defaultId={Address.default}
                onBlur={(): void => this.onPopClose()}
                onClick={(event: React.MouseEvent, id: number): void => this.onSettingClick(event, id)}
              />
            </li>
          ))}
        </ul>
        <Maybe if={popView}>
          <AddressSettingPop onChange={(event: React.MouseEvent): void => this.onDefaultAddressChange(event)} popStyle={popStyle} />
        </Maybe>
        <Maybe if={moreBtnView}>
          <button className="more-btn" onClick={(event): void => this.onMoreAddress(event)}>
            + 더 보기
          </button>
        </Maybe>
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
