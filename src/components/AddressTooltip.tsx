import React from 'react'

interface TypeProps {
  style: {
    top: number
    left: number
  }
  onChange: Function
  onDelete: Function
}

const AddressTooltip: React.FC<TypeProps> = (props: TypeProps) => {
  const { style, onChange, onDelete } = props

  return (
    <>
      <div style={style} className="address-tooltip">
        <button onClick={(event): void => onChange(event)}>기본 배송지 설정</button>
        <button onClick={(event): void => onDelete(event)}>삭제</button>
      </div>
    </>
  )
}

export default AddressTooltip
