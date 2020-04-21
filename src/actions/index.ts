import { createAction } from 'typesafe-actions'

export const fetchAddress = createAction(
  '@command/fetch/address',
  (resolve) => {
    return () => resolve()
  },
)()
