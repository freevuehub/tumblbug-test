import React, { useState, useEffect } from 'react'
import { AddHeader } from '../components'
import { AddForm } from '../containers'

interface TypeProps {
  onClose: Function
}

const AddPop: React.FC<TypeProps> = (props: TypeProps) => {
  const [on, setOn] = useState('')

  useEffect(() => setOn('on'))

  return (
    <div className={`add-address-pop ${on}`}>
      <div className="wrap">
        <AddHeader onClose={props.onClose} />
        <AddForm onClose={props.onClose} />
      </div>
    </div>
  )
}

export default AddPop
