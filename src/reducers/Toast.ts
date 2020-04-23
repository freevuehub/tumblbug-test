import { ToastStoreState, ToastItem } from '../types'

const InitializeState: ToastStoreState = { list: [] }
const ADD_TOAST = '@command/add/toast' as const
const REMOVE_TOAST = '@command/remove/toast' as const

export const addToast = (payload: ToastItem) => {
  return {
    type: ADD_TOAST,
    payload,
  }
}
export const removeToast = (payload: number) => {
  return {
    type: REMOVE_TOAST,
    payload,
  }
}

type Action = ReturnType<typeof addToast> | ReturnType<typeof removeToast>

export default function ToastReducer(
  state: ToastStoreState = InitializeState,
  action: Action,
): ToastStoreState {
  switch (action.type) {
    case ADD_TOAST:
      return {
        list: state.list.concat({
          id: state.list.length ? Math.max(...state.list.map((item: ToastItem) => item.id)) + 1 : 0,
          ...action.payload,
        }),
      }
    case REMOVE_TOAST:
      return {
        list: state.list.slice(action.payload, 1),
      }
    default:
      return Object.assign({}, state)
  }
}
