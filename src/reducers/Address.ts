import { AddressStoreState } from '../types'

const FETCH_ADDRESS = '@command/fetch/address' as const

export const fetchAddress = (payload: AddressStoreState) => {
  return {
    type: FETCH_ADDRESS,
    payload,
  }
}

const InitializeState: AddressStoreState = {
  addresses: [],
  default: 0,
}

type TypeAction = ReturnType<typeof fetchAddress>

export default function Address(state: AddressStoreState = InitializeState, action: TypeAction) {
  switch (action.type) {
    case FETCH_ADDRESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return Object.assign({}, state)
  }
}
