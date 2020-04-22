import { createAction } from 'typesafe-actions'
import { loadAddress } from '../axios'

export const fetchAddress = createAction(
  '@command/fetch/address',
  async (resolve) => {
    const { data }: any = await loadAddress()

    console.log(data)

    return () => resolve(data)
  },
)()
