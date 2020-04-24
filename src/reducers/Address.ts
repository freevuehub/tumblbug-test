import { AddressStoreState, AddressItem, TypeAddress } from '../types'

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
export const addAddress = (payload: TypeAddress<string>, check: boolean) => {
  return {
    type: ADD_ADDRESS,
    payload: {
      item: {
        postnumber: Number(payload.postnumber),
        address: payload.address,
        name: payload.name,
      },
      check,
    },
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
    case ADD_ADDRESS:
      return action.payload.check
        ? {
            ...state,
            addresses: state.addresses.concat({
              ...action.payload.item,
              id: Math.max(...state.addresses.map((item: AddressItem) => item.id)) + 1,
            }),
            default: Math.max(...state.addresses.map((item: AddressItem) => item.id)) + 1,
          }
        : {
            ...state,
            addresses: state.addresses.concat({
              ...action.payload.item,
              id: Math.max(...state.addresses.map((item: AddressItem) => item.id)) + 1,
            }),
          }
    case CHANGE_DEFAULT:
      return {
        ...state,
        default: action.payload,
      }
    case REMOVE_ADDRESS:
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
