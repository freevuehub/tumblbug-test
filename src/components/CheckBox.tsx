import React from 'react'
import Maybe from './Maybe'

interface TypeProps {
  className?: string
  label?: string
  value?: boolean
  onChange: Function
}

const CheckBox: React.FC<TypeProps> = (props: TypeProps) => {
  return (
    <div className={`check-box ${props.className}`}>
      <input
        id="checkbox"
        type="checkbox"
        checked={props.value}
        onChange={({ target }): void => props.onChange(target.checked)}
      />
      <Maybe if={!!props.label}>
        <label htmlFor="checkbox">{props.label}</label>
      </Maybe>
    </div>
  )
}

export default CheckBox
