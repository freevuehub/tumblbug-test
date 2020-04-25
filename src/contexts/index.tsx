import React, { createContext, Dispatch, useReducer, useContext } from 'react'

export interface TypeConfirm {
  text: string
  view: boolean
  confirm: boolean
}

export interface TypeForm {
  name: string
  postnumber: string
  address: string
}

export interface TypeState {
  confirmInfo: TypeConfirm
  tooltipView: boolean
  formData: TypeForm
}

export const SystemStateContext = createContext<TypeState | undefined>(undefined)

type Action =
  | { type: 'CONFIRM_UPDATE'; payload: TypeConfirm }
  | { type: 'TOOLTIP_ON_OFF'; payload: boolean }
  | { type: 'FORM_DATA_CHANGE'; payload: TypeForm }

type TypeAction = Dispatch<Action>

export const SystemActionContext = createContext<TypeAction | undefined>(undefined)

function SystemReducer(state: TypeState, action: Action): TypeState {
  switch (action.type) {
    case 'CONFIRM_UPDATE':
      return {
        ...state,
        confirmInfo: action.payload,
      }
    case 'TOOLTIP_ON_OFF':
      return {
        ...state,
        tooltipView: action.payload,
      }
    case 'FORM_DATA_CHANGE':
      return {
        ...state,
        formData: action.payload,
      }
    default:
      throw new Error('존재하지 않는 액션입니다.')
  }
}

export function SystemProvider(props: { children: React.ReactNode }): React.ReactElement {
  const [state, dispatch] = useReducer(SystemReducer, {
    confirmInfo: {
      text: '',
      view: false,
      confirm: false,
    },
    tooltipView: false,
    formData: {
      name: '',
      postnumber: '',
      address: '',
    },
  })

  return (
    <SystemActionContext.Provider value={dispatch}>
      <SystemStateContext.Provider value={state}>{props.children}</SystemStateContext.Provider>
    </SystemActionContext.Provider>
  )
}

export function useSystemState() {
  const state = useContext(SystemStateContext)

  if (!state) {
    throw new Error('Context를 찾지 못했습니다.')
  }

  return state
}

export function useSystemDispatch() {
  const dispatch = useContext(SystemActionContext)

  if (!dispatch) {
    throw new Error('Context를 찾지 못했습니다.')
  }

  return dispatch
}
