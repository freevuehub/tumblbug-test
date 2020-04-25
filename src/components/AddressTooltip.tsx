import React from 'react'

interface TypeProps {
  onChange: Function
  onDelete: Function
}

const AddressTooltip: React.FC<TypeProps> = (props: TypeProps) => {
  const { onChange, onDelete } = props

  return (
    <>
      <button onClick={(event): void => onChange(event)}>기본 배송지 설정</button>
      <button onClick={(event): void => onDelete(event)}>삭제</button>
    </>
  )
}

export default AddressTooltip
