import React, { useState, useEffect } from 'react'
import { AddHeader } from '../components'
import { AddForm } from '../containers'

interface TypeProps {
  onClose: Function
}

// class AddPop extends React.PureComponent<TypeProps> {
//   state = {
//     on: '',
//   }

//   componentDidMount(): void {
//     this.setState({ on: 'on' })
//   }

//   onClose = (): void => {
//     this.setState({ on: '' })
//     setTimeout(() => {
//       console.log('a')
//       // props.onClose(event)
//     }, 150)
//   }

//   render(): React.ReactElement {
//     return (
//       <div className={`add-address-pop ${this.state.on}`}>
//         <div className="wrap">
//           <AddHeader onClose={this.onClose} />
//           <AddForm onClose={this.onClose} />
//         </div>
//       </div>
//     )
//   }
// }

const AddPop: React.FC<TypeProps> = (props: TypeProps) => {
  // const [on, setOn] = useState('')
  const onClose = (event: React.MouseEvent): void => {
    props.onClose(event)
  }

  // useEffect(() => setOn('on'))

  return (
    <div className="wrap">
      <AddHeader onClose={onClose} />
      <AddForm onClose={onClose} />
    </div>
  )
}

export default AddPop
