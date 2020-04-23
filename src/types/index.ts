export interface NavItem {
  name: string
  path: string
}
export interface NavStoreState {
  list: NavItem[]
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
  viewCount: number
}
