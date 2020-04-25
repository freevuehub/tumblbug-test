import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react'

interface TypeProps {
  type?: string | 'text'
  placeholder?: string
  className?: string
  value?: string
  onChange: Function
  validation?: Function[]
  hint: string[] | ['']
}

const TextInput = (props: TypeProps, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [hint, setHint] = useState('')
  const [validation, setValidation] = useState(true)

  const allValid = () =>
    props.validation?.every((valid, idx) => {
      if (!valid(inputRef.current?.value)) {
        setHint(props.hint[idx])
      }

      return valid(inputRef.current?.value)
    })
  const onChange = (): void => {
    const { value } = inputRef.current as HTMLInputElement

    setValidation(!!allValid())

    props.onChange(value)
  }

  useImperativeHandle(ref, () => ({
    focus: (): void => inputRef.current?.focus(),
    valid: (): boolean => {
      onChange()

      return !!allValid()
    },
  }))

  return (
    <div className={`text-input ${props.className} ${validation ? '' : 'error hint-on'}`}>
      {validation}
      <div className="input-wrap">
        <input
          ref={inputRef}
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

const BuildInput = forwardRef(TextInput)

export default BuildInput
