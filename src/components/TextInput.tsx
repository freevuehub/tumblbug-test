import React, { useState } from 'react'

interface TypeProps {
  type?: string
  placeholder?: string
  className?: string
  value?: string
  onChange: Function
  validation?: Function[]
  hint: string[]
}

const TextInput: React.FC<TypeProps> = (props: TypeProps) => {
  const [hint, setHint] = useState('')
  const [validation, setValidation] = useState(true)
  const onChange = (event: React.FormEvent): void => {
    const { value } = event.currentTarget as HTMLInputElement

    setValidation(
      !!props.validation?.every((item, idx) => {
        setHint(props.hint[idx])

        return item(value)
      }),
    )

    props.onChange(value)
  }

  return (
    <div className={`text-input ${props.className} ${validation ? '' : 'error hint-on'}`}>
      <div className="input-wrap">
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChange}
        />
      </div>
      <p className="hint">{hint}</p>
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
  hint: [''],
}

export default TextInput
