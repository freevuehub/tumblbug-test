import React from 'react'

interface TypeProps {
  onClose: Function
}

const AddHeader: React.FC<TypeProps> = (props: TypeProps) => (
  <div className="header">
    <h1>배송지 추가</h1>
    <button onClick={(event): void => props.onClose(event)}>&#10005;</button>
  </div>
)

export default AddHeader
