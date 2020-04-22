export interface NavStoreState {
  list: {
    name: string
    path: string
  }[]
}

export interface AddressStoreState {
  addresses: {
    id: number
    postnumber: number
    name: string
    address: string
  }[]
  default: number
}
