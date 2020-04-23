import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../reducers/Address'
import { loadAddress } from '../axios'
import { AddressStoreState, AddressItem } from '../types'
import { AddressList, AddForm } from '../containers'
import { Maybe, AddHeader } from '../components'

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
    const [defaultItem] = data.addresses.filter((item: AddressItem) => item.id === data.default)
    const idx: number = data.addresses.indexOf(defaultItem)

    data.addresses.splice(idx, 1)

    fetchAddress({ ...data, addresses: [defaultItem, ...data.addresses] })
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
          <div className="notice">
            <h4>배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</h4>
            <p>
              현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다. 이를 변경하시려면 후원현황에서 변경해주세요.
              <a href="#">내 후원현황 바로가기</a>
            </p>
          </div>
        </div>
        <Maybe if={this.state.popView}>
          <div className="add-address-pop">
            <AddHeader onClose={(event: React.MouseEvent): void => this.onAddressAddPop(event, false)} />
            <AddForm />
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
