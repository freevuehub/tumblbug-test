import React from 'react'
import { connect } from 'react-redux'
import { addViewCount, changeDefault } from '../reducers/Address'
import { addToast } from '../reducers/Toast'
import { AddressStoreState, AddressItem, ToastStoreState } from '../types'
import { Maybe, AddressListItem, AddressTooltip, Confirm } from '../components'

interface TypeProps {
  Address: AddressStoreState
  addViewCount: Function
  changeDefault: Function
  addToast: Function
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

  get buildAddress(): AddressItem[] {
    const {
      Address: { addresses, viewCount },
    } = this.props

    return addresses.slice(0, viewCount)
  }

  get moreBtnView(): boolean {
    const {
      Address: { addresses },
    } = this.props

    return addresses.length > this.buildAddress.length
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

    this.props.changeDefault(this.state.addressId)
    this.onPopClose()
    this.props.addToast({
      text: '기본 배송지가 변경되었습니다.',
      view: true,
      type: 'sucess',
    })
  }

  onMoreAddress(event: React.MouseEvent): void {
    event.preventDefault()

    this.props.addViewCount()
  }

  render(): React.ReactElement {
    const { Address } = this.props
    const { popView, popStyle } = this.state

    return (
      <>
        <ul className="address-list">
          {this.buildAddress.map((item: AddressItem) => (
            <li key={item.id}>
              <AddressListItem
                item={item}
                defaultId={Address.default}
                onBlur={(): void => this.onPopClose()}
                onClick={(event: React.MouseEvent, id: number): void =>
                  this.onSettingClick(event, id)
                }
              />
            </li>
          ))}
        </ul>
        <Maybe if={popView}>
          <AddressTooltip
            onChange={(event: React.MouseEvent): void => this.onDefaultAddressChange(event)}
            popStyle={popStyle}
          />
        </Maybe>
        <Maybe if={this.moreBtnView}>
          <button className="more-btn" onClick={(event): void => this.onMoreAddress(event)}>
            + 더 보기
          </button>
        </Maybe>
        <Maybe if={this.moreBtnView}>
          <Confirm confirm={false}>정말 삭제하시겠습니까?</Confirm>
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
    changeDefault: (payload: number) => dispatch(changeDefault(payload)),
    addToast: (payload: ToastStoreState) => dispatch(addToast(payload)),
  }),
)(AddressList)
