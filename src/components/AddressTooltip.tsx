import React from 'react'

interface TypeProps {
  popStyle: {
    top: number
    left: number
  }
  onChange: Function
}

const AddressTooltip: React.FC<TypeProps> = (props: TypeProps) => {
  const { popStyle, onChange } = props

  return (
    <div style={popStyle} className="address-tooltip">
      <button onClick={(event): void => onChange(event)}>기본 배송지 설정</button>
      <button>삭제</button>
    </div>
  )
}

export default AddressTooltip
