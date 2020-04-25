import React from 'react'

interface TypeProps {
  onClose: Function
}

const AddHeader: React.FC<TypeProps> = (props: TypeProps) => {
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault()

    props.onClose()
  }

  return (
    <div className="header">
      <h1>배송지 추가</h1>
      <button onClick={onClick}>&#10005;</button>
    </div>
  )
}

export default AddHeader
