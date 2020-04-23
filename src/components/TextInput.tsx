import React from 'react'

interface TypeProps {
  placeholder?: string
}

const TextInput: React.FC<TypeProps> = (props: TypeProps) => {
  return (
    <div className="text-input">
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default TextInput
