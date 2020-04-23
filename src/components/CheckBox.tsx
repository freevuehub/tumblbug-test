import React, { useState } from 'react'
import Maybe from './Maybe'

interface TypeProps {
  className?: string
  label?: string
}

const CheckBox: React.FC<TypeProps> = (props: TypeProps) => {
  const [check, setCheck] = useState(false)

  return (
    <div className={`check-box ${props.className} ${check ? 'checked' : ''}`}>
      <input id="checkbox" type="checkbox" checked={check} onChange={({ target }: any): void => setCheck(target.checked)} />
      <Maybe if={!!props.label}>
        <label htmlFor="checkbox">{props.label}</label>
      </Maybe>
    </div>
  )
}

export default CheckBox
