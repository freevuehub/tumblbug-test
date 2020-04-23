import React from 'react'

interface TypeProps {
  popStyle: {
    top: number
    left: number
  }
}

const AddressSettingPop: React.FC<TypeProps> = (props: TypeProps) => {
  const { popStyle } = props

  return (
    <div style={popStyle} className="address-setting-pop">
      <button>기본 배송지 설정</button>
      <button>삭제</button>
    </div>
  )
}

export default AddressSettingPop
