export interface NavItem {
  name: string
  path: string
}
export interface NavStoreState {
  list: NavItem[]
}

export interface TypeAddress<T = number> {
  postnumber: T
  name: string
  address: string
}

export interface AddressItem extends TypeAddress {
  id: number
}

export interface AddressStoreState {
  addresses: AddressItem[]
  default: number
}

export interface TypeToast {
  message: string
  view: boolean
  type: string
}

export interface ToastItem extends TypeToast {
  id: number
}

export interface ToastStoreState {
  list: ToastItem[]
}
