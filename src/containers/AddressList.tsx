import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeDefault, removeAddress } from '../reducers/Address'
import { addToast } from '../reducers/Toast'
import { useSystemState, useSystemDispatch } from '../contexts'
import { AddressStoreState, AddressItem } from '../types'
import { Maybe, AddressListItem, AddressTooltip } from '../components'

interface TypeProps {
  Address: AddressStoreState
  addViewCount: Function
  changeDefault: Function
  addToast: Function
}

const AddressList: React.FC = () => {
  const { list, defaultId } = useSelector(({ Address }: TypeProps) => {
    if (Address.addresses.length) {
      const [defaultItem] = Address.addresses.filter(
        (item: AddressItem) => item.id === Address.default,
      )

      if (defaultItem) {
        const idx: number = Address.addresses.indexOf(defaultItem)

        return {
          list: [
            defaultItem,
            ...Address.addresses.slice(0, idx),
            ...Address.addresses.slice(idx + 1),
          ],
          defaultId: Address.default,
        }
      } else {
        return {
          list: Address.addresses,
          defaultId: Address.default,
        }
      }
    } else {
      return {
        list: Address.addresses,
        defaultId: Address.default,
      }
    }
  })
  const dispatch = useDispatch()

  const { tooltipView, confirmInfo } = useSystemState()
  const systemDispatch = useSystemDispatch()

  const [count, setCount] = useState(5)
  const [{ id, style }, setId] = useState({
    id: defaultId,
    style: { top: 0, left: 0 },
  })

  const onItemClick = (event: React.MouseEvent, itemId: number): void => {
    event.stopPropagation()

    if (tooltipView && itemId === id) {
      systemDispatch({ type: 'TOOLTIP_ON_OFF', payload: false })
    } else {
      const { offsetLeft, offsetTop } = event.target as HTMLElement

      setId({ style: { left: offsetLeft, top: offsetTop }, id: itemId })
      systemDispatch({ type: 'TOOLTIP_ON_OFF', payload: true })
    }
  }
  const onDefaultAddressChange = (event: React.MouseEvent): void => {
    event.preventDefault()

    dispatch(changeDefault(id))
    setId({ style, id })
    systemDispatch({ type: 'TOOLTIP_ON_OFF', payload: false })
    dispatch(
      addToast({
        message: '기본 배송지가 변경되었습니다.',
        view: true,
        type: 'sucess',
      }),
    )
  }
  const onAddressDelete = (event: React.MouseEvent): void => {
    event.preventDefault()

    systemDispatch({
      type: 'CONFIRM_UPDATE',
      payload: {
        ...confirmInfo,
        text: '정말 삭제하시겠습니까?',
        view: true,
        confirm: false,
      },
    })
  }

  useEffect(() => {
    if (confirmInfo.confirm) {
      dispatch(removeAddress(id))
      systemDispatch({
        type: 'CONFIRM_UPDATE',
        payload: {
          ...confirmInfo,
          confirm: false,
        },
      })
      dispatch(
        addToast({
          message: '삭제되었습니다.',
          view: true,
          type: 'sucess',
        }),
      )
    }
  })

  return (
    <>
      <ul className="address-list">
        {list.slice(0, count).map((item: AddressItem) => (
          <li key={item.id}>
            <AddressListItem item={item} defaultId={defaultId} onClick={onItemClick} />
          </li>
        ))}
      </ul>
      <Maybe if={list.length > count}>
        <button className="more-btn" onClick={(): void => setCount(count + 5)}>
          + 더 보기
        </button>
      </Maybe>
      <Maybe if={tooltipView} animation="fade">
        <div style={style} className="address-tooltip">
          <AddressTooltip onChange={onDefaultAddressChange} onDelete={onAddressDelete} />
        </div>
      </Maybe>
    </>
  )
}

export default AddressList
