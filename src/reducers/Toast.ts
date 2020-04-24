import { ToastStoreState, TypeToast } from '../types'

const InitializeState: ToastStoreState = {
  list: [],
}
const ADD_TOAST = '@command/add/toast' as const
const REMOVE_TOAST = '@command/remove/toast' as const

export const addToast = (payload: TypeToast) => {
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
        list: [
          {
            ...action.payload,
            id: state.list.length ? Math.max(...state.list.map((item) => item.id)) + 1 : 1,
          },
          ...state.list,
        ],
      }
    case REMOVE_TOAST:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload ? { ...item, view: false } : item,
        ),
      }
    default:
      return Object.assign({}, state)
  }
}
