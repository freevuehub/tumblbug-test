import { AddressStoreState, AddressItem } from '../types'

const FETCH_ADDRESS = '@command/fetch/address' as const
const ADD_VIEW_COUNT = '@command/add/view/count' as const
const ADD_ADDRESS = '@command/add/address' as const

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
export const addAddress = (payload: AddressItem) => {
  console.log(payload)

  return {
    type: ADD_ADDRESS,
  }
}

const InitializeState: AddressStoreState = {
  addresses: [],
  default: 0,
  viewCount: 5,
}

type TypeAction =
  | ReturnType<typeof fetchAddress>
  | ReturnType<typeof addViewCount>
  | ReturnType<typeof addAddress>

export default function Address(
  state: AddressStoreState = InitializeState,
  action: TypeAction,
): AddressStoreState {
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
    case ADD_ADDRESS:
      return {
        ...state,
      }
    default:
      return Object.assign({}, state)
  }
}
