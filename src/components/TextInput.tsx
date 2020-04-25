import React from 'react'

interface TypeProps {
  type?: string
  placeholder?: string
  className?: string
  value?: string
  onChange: Function
  error?: boolean
  hint: string
}

const TextInput: React.FC<TypeProps> = (props: TypeProps) => {
  const onChange = (event: React.FormEvent): void => {
    const { value } = event.currentTarget as HTMLInputElement

    props.onChange(value)
  }

  return (
    <div className={`text-input ${props.className} ${props.error ? 'error hint-on' : ''}`}>
      <div className="input-wrap">
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChange}
        />
      </div>
      <p className="hint">{props.hint}</p>
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
  hint: '',
}

export default TextInput
