import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../reducers/Address'
import { loadAddress } from '../axios'
import { AddressStoreState } from '../types'
import { AddressList } from '../containers'

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
    return (
      <div className="content">
        <div className="header">
          <h2>등록된 배송지</h2>
          <button onClick={this.onAddressAdd}>+ 추가</button>
        </div>
        <AddressList />
        <button className="more-btn">+ 더 보기</button>
        <div className="notice">
          <h4>배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</h4>
          <p>
            현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다. 이를 변경하시려면 후원현황에서 변경해주세요.
            <a href="#">내 후원현황 바로가기</a>
          </p>
        </div>
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
