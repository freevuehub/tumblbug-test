import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../reducers/Address'
import { loadAddress } from '../axios'
import { AddressStoreState } from '../types'
import { AddressList, AddForm } from '../containers'
import { Maybe, AddHeader, AddressNotice } from '../components'

interface TypeAddress {
  Address: AddressStoreState
}
interface TypeProps extends TypeAddress {
  fetchAddress: Function
}

interface TypeState {
  popView: boolean
}

class Address extends React.PureComponent<TypeProps, TypeState> {
  state: TypeState = {
    popView: false,
  }

  async componentDidMount(): Promise<void> {
    const { fetchAddress } = this.props
    const { data }: any = await loadAddress()

    fetchAddress(data)
  }

  onAddressAddPop(event: React.MouseEvent, popView: boolean): void {
    event.preventDefault()

    this.setState({ popView })
  }

  render(): React.ReactElement {
    return (
      <>
        <div className="content">
          <div className="header">
            <h2>등록된 배송지</h2>
            <button onClick={(event): void => this.onAddressAddPop(event, true)}>+ 추가</button>
          </div>
          <AddressList />
          <AddressNotice />
        </div>
        <Maybe if={this.state.popView}>
          <div className="add-address-pop">
            <div className="wrap">
              <AddHeader
                onClose={(event: React.MouseEvent): void => this.onAddressAddPop(event, false)}
              />
              <AddForm
                onClose={(event: React.MouseEvent): void => this.onAddressAddPop(event, false)}
              />
            </div>
          </div>
        </Maybe>
      </>
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
