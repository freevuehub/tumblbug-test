import React from 'react'

interface TypeProps {
  type?: string
  placeholder?: string
  className?: string
  value?: string
  onChange: Function
  error?: Function | boolean
  vali?: [Function]
}

const TextInput: React.FC<TypeProps> = (props: TypeProps) => {
  return (
    <div className={`text-input ${props.className}`}>
      <div className="input-wrap">
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={({ target }): void => props.onChange(target.value)}
        />
      </div>
      <p className="hint">필수 입력값입니다.</p>
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
