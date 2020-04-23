import { ToastStoreState } from '../types'

const InitializeState: ToastStoreState = {
  text: '',
  view: false,
  type: '',
}
const ADD_TOAST = '@command/add/toast' as const
const REMOVE_TOAST = '@command/remove/toast' as const

export const addToast = (payload: ToastStoreState) => {
  return {
    type: ADD_TOAST,
    payload,
  }
}

export const removeToast = () => {
  return {
    type: REMOVE_TOAST,
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
        ...action.payload,
      }
    case REMOVE_TOAST:
      return {
        ...state,
        view: false,
      }
    default:
      return Object.assign({}, state)
  }
}
