import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeDefault } from '../reducers/Address'
import { addToast } from '../reducers/Toast'
import { SystemStateContext } from '../contexts'
import { AddressStoreState, AddressItem } from '../types'
import { Maybe, AddressListItem, AddressTooltip, Confirm } from '../components'

interface TypeProps {
  Address: AddressStoreState
  addViewCount: Function
  changeDefault: Function
  addToast: Function
}

const AddressList: React.FC = () => {
  const { addresses, default: defaultId } = useSelector(({ Address }: TypeProps) => Address)
  const dispatch = useDispatch()

  const [count, setCount] = useState(5)
  const [{ id, style, tooltip }, setId] = useState({
    id: defaultId,
    style: { top: 0, left: 0 },
    tooltip: false,
  })
  const onItemClick = ({ target }: React.MouseEvent, id: number): void => {
    const { offsetLeft, offsetTop } = target as HTMLElement

    setId({ style: { left: offsetLeft, top: offsetTop }, id, tooltip: true })
  }
  const onDefaultAddressChange = (event: React.MouseEvent): void => {
    event.preventDefault()

    dispatch(changeDefault(id))
    setId({ style, id, tooltip: false })
    dispatch(
      addToast({
        text: '기본 배송지가 변경되었습니다.',
        view: true,
        type: 'sucess',
      }),
    )
  }

  return (
    <>
      <ul className="address-list">
        {addresses.slice(0, count).map((item: AddressItem) => (
          <li key={item.id}>
            <AddressListItem item={item} defaultId={defaultId} onClick={onItemClick} />
          </li>
        ))}
      </ul>
      <Maybe if={addresses.length > count}>
        <button className="more-btn" onClick={(): void => setCount(count + 5)}>
          + 더 보기
        </button>
      </Maybe>
      <Maybe if={tooltip}>
        <AddressTooltip onChange={onDefaultAddressChange} style={style} />
      </Maybe>
      <Maybe if={true}>
        <Confirm confirm={false}>정말 삭제하시겠습니까?</Confirm>
      </Maybe>
    </>
  )
}

export default AddressList
