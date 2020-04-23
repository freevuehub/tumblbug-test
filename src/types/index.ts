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
}

export interface ToastStoreState {
  text: string
  view: boolean
  type: string
}
