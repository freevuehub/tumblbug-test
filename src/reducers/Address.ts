import { AddressStoreState, AddressItem } from '../types'

const FETCH_ADDRESS = '@command/fetch/address' as const
const ADD_ADDRESS = '@command/add/address' as const
const REMOVE_ADDRESS = '@command/remove/address' as const
const CHANGE_DEFAULT = '@command/change/default' as const

export const fetchAddress = (payload: AddressStoreState) => {
  return {
    type: FETCH_ADDRESS,
    payload,
  }
}
export const addAddress = (payload: AddressItem) => {
  console.log(payload)

  return {
    type: ADD_ADDRESS,
  }
}
export const removeAddress = (payload: number) => {
  return {
    type: REMOVE_ADDRESS,
    payload,
  }
}
export const changeDefault = (payload: number) => {
  return {
    type: CHANGE_DEFAULT,
    payload,
  }
}

const InitializeState: AddressStoreState = {
  addresses: [],
  default: 0,
}

type TypeAction =
  | ReturnType<typeof fetchAddress>
  | ReturnType<typeof addAddress>
  | ReturnType<typeof removeAddress>
  | ReturnType<typeof changeDefault>

const findDefault = (list: AddressItem[], id: number): AddressItem => {
  const [defaultItem] = list.filter((item: AddressItem) => item.id === id)

  return defaultItem
}
const findIdx = (list: AddressItem[], item: AddressItem): number => list.indexOf(item)
const buildAddress = (
  list: AddressItem[],
  id: number,
): { addresses: AddressItem[]; default: number } => {
  const item = findDefault(list, id)

  list.splice(findIdx(list, item), 1)

  return {
    addresses: [item, ...list],
    default: id,
  }
}

export default function Address(
  state: AddressStoreState = InitializeState,
  action: TypeAction,
): AddressStoreState {
  switch (action.type) {
    case FETCH_ADDRESS:
      return {
        ...state,
        ...buildAddress(action.payload.addresses, action.payload.default),
      }
    case ADD_ADDRESS:
      return {
        ...state,
      }
    case CHANGE_DEFAULT:
      return {
        ...state,
        ...buildAddress(state.addresses, action.payload),
      }
    case REMOVE_ADDRESS:
      console.log()

      return {
        ...state,
        addresses: [
          ...state.addresses.slice(
            0,
            findIdx(state.addresses, findDefault(state.addresses, action.payload)),
          ),
          ...state.addresses.slice(
            findIdx(state.addresses, findDefault(state.addresses, action.payload)) + 1,
          ),
        ],
      }
    default:
      return Object.assign({}, state)
  }
}
