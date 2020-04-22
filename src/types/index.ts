export interface NavStoreState {
  list: {
    name: string
    path: string
  }[]
}

export interface AddressItem {
  id: number
  postnumber: number
  name: string
  address: string
}

export interface AddressStoreState {
  addresses: AddressItem[]
  default: number
}
