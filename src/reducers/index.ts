import { StoreState } from '../types'

const InitializeState: StoreState = {
  nav: {
    list: [
      { path: '/profile', name: '프로필' },
      { path: '/account', name: '계정' },
      { path: '/paymethod', name: '결제수단' },
      { path: '/address', name: '배송지' },
      { path: '/notification', name: '알림' },
    ],
  },
}

function Reducer(state: StoreState = InitializeState, action: any): StoreState {
  switch (action.type) {
    default:
      return Object.assign({}, state)
  }
}

export default Reducer
