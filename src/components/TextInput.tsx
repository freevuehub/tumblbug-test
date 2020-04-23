import React from 'react'

interface TypeProps {
  type?: string
  placeholder?: string
  className?: string
  value?: string
  onChange: Function
}

const TextInput: React.FC<TypeProps> = (props: TypeProps) => {
  return (
    <div className={`text-input ${props.className}`}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={({ target }): void => props.onChange(target.value)}
      />
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
