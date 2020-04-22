import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../actions'

interface TypeProps {
  fetchAddress: Function
}

class Address extends React.PureComponent<TypeProps> {
  componentDidMount() {
    this.props.fetchAddress()
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
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      list: state,
    }
  },
  (dispatch) => ({
    fetchAddress: () => dispatch(fetchAddress('')),
  }),
)(Address)
