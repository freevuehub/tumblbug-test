import { ActionType, getType } from 'typesafe-actions'
import * as Actions from '../actions'
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

export default (
  state: StoreState = InitializeState,
  action: ActionType<typeof Actions>,
  // action: any,
): StoreState => {
  switch (action.type) {
    case getType(Actions.fetchAddress):
      console.log(action)
      return {
        ...state,
        ...action.payload,
      }
    default:
      return Object.assign({}, state)
  }
}
