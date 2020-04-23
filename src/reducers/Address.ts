import { AddressStoreState } from '../types'

const FETCH_ADDRESS = '@command/fetch/address' as const
const ADD_VIEW_COUNT = '@command/add/view/count' as const

export const fetchAddress = (payload: AddressStoreState) => {
  return {
    type: FETCH_ADDRESS,
    payload,
  }
}
export const addViewCount = () => {
  return {
    type: ADD_VIEW_COUNT,
  }
}

const InitializeState: AddressStoreState = {
  addresses: [],
  default: 0,
  viewCount: 5,
}

type TypeAction = ReturnType<typeof fetchAddress> | ReturnType<typeof addViewCount>

export default function Address(state: AddressStoreState = InitializeState, action: TypeAction): AddressStoreState {
  switch (action.type) {
    case FETCH_ADDRESS:
      return {
        ...state,
        ...action.payload,
      }
    case ADD_VIEW_COUNT:
      return {
        ...state,
        viewCount: state.viewCount + 5,
      }
    default:
      return Object.assign({}, state)
  }
}
