import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../reducers/Address'
import { loadAddress } from '../axios'
import { AddressStoreState } from '../types'
import { AddressList, AddForm } from '../containers'
import { Maybe, AddressNotice, AddHeader } from '../components'

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

  onAddPopPoen(popView: boolean): void {
    this.setState({ popView })
  }

  render(): React.ReactElement {
    return (
      <>
        <div className="content">
          <div className="article">
            <div className="header">
              <h2>등록된 배송지</h2>
              <button onClick={(): void => this.onAddPopPoen(true)}>+ 추가</button>
            </div>
            <AddressList />
          </div>
          <AddressNotice />
        </div>
        <Maybe if={this.state.popView} animation="pop">
          <div className="add-address-pop">
            <div className="wrap">
              <AddHeader onClose={(): void => this.onAddPopPoen(false)} />
              <AddForm onClose={(): void => this.onAddPopPoen(false)} />
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
