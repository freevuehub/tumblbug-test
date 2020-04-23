import React from 'react'

interface TypeProps {
  children?: React.ReactNode
  confirm: boolean
}

const Confirm: React.FC<TypeProps> = (props: TypeProps) => {
  return (
    <div className="confirm">
      <div className="wrap">
        <div className="description">
          <p>{props.children}</p>
        </div>
        <div className="remote"></div>
      </div>
    </div>
  )
}

export default Confirm
