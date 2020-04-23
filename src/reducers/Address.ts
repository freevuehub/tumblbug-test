import { AddressStoreState, AddressItem } from '../types'

const FETCH_ADDRESS = '@command/fetch/address' as const
const ADD_VIEW_COUNT = '@command/add/view/count' as const
const ADD_ADDRESS = '@command/add/address' as const
const CHANGE_DEFAULT = '@command/change/default' as const

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
export const changeDefault = (payload: number) => {
  return {
    type: CHANGE_DEFAULT,
    payload,
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
  | ReturnType<typeof changeDefault>

const buildList = (list: AddressItem[], id: number | undefined): AddressItem[] => {
  if (!id) {
    return []
  }

  const [defaultItem] = list.filter((item: AddressItem) => item.id === id)
  const idx: number = list.indexOf(defaultItem)

  list.splice(idx, 1)

  return [defaultItem, ...list]
}

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
    case CHANGE_DEFAULT:
      return {
        ...state,
        default: action.payload,
      }
    default:
      return Object.assign({}, state)
  }
}
