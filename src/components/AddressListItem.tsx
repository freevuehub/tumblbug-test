import React from 'react'
import { AddressItem } from '../types'

interface TypeProps {
  item: AddressItem
  defaultId: number
  onClick: Function
}

const AddressListItem: React.FC<TypeProps> = (props: TypeProps) => {
  const { item, defaultId, onClick } = props

  return (
    <>
      <div className="info">
        <h5>
          [{item.postnumber}]{item.id === defaultId && <span>기본</span>}
        </h5>
        <p>{item.address}</p>
      </div>
      <button onClick={(event): void => onClick(event, item.id)}>&sdot;&sdot;&sdot;</button>
    </>
  )
}

export default AddressListItem
