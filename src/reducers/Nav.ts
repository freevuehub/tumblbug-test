import { NavStoreState } from '../types'

const InitializeState = {
  list: [
    { path: '/profile', name: '프로필' },
    { path: '/account', name: '계정' },
    { path: '/paymethod', name: '결제수단' },
    { path: '/address', name: '배송지' },
    { path: '/notification', name: '알림' },
  ],
}

export default function Nav(state: NavStoreState = InitializeState): NavStoreState {
  return Object.assign({}, state)
}
