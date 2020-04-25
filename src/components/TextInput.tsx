import React, { useState, useEffect, forwardRef } from 'react'

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
  const [hint, setHint] = useState('')
  const [validation, setValidation] = useState(true)

  const onChange = (event: React.FormEvent): void => {
    const { value } = event.currentTarget as HTMLInputElement

    setValidation(
      !!props.validation?.every((item, idx) => {
        if (!item(value)) {
          setHint(props.hint[idx])
        }

        return item(value)
      }),
    )

    props.onChange(value)
  }

  // useEffect(() => {
  //   setValidation(
  //     !!props.validation?.every((item, idx) => {
  //       if (!item(props.value)) {
  //         setHint(props.hint[idx])
  //       }

  //       return item(props.value)
  //     }),
  //   )
  // })

  return (
    <div className={`text-input ${props.className} ${validation ? '' : 'error hint-on'}`}>
      <div className="input-wrap">
        <input
          ref={ref}
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
