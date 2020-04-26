import React from 'react'

interface TypeFormProps {
  onSubmit: Function
  children: React.ReactNode
}

const Form: React.FC<TypeFormProps> = (props: TypeFormProps) => {
  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    const valids: boolean[] = []

    React.Children.map(props.children, (child: any) => {
      if (child.ref) {
        valids.push(child.ref.current.valid())
      }

      return child
    })

    props.onSubmit(!valids.every((vali) => !!vali))
  }

  return <form onSubmit={onSubmit}>{props.children}</form>
}

export default Form
