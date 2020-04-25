import React from 'react'

interface TypeProps {
  children: React.ReactNode
  if: boolean
  animation?: string
}

class Maybe extends React.PureComponent<TypeProps> {
  state = {
    view: false,
    classNames: '',
  }

  componentDidMount(): void {
    this.setState({ classNames: 'on' })
  }

  componentDidUpdate(): void {
    if (this.props.animation) {
      this.setState({ classNames: this.props.if ? 'on' : '' })
    }
  }

  render(): React.ReactElement {
    return this.props.if ? <>{this.props.children}</> : <></>
    // return (
    //   <>
    //     {this.props.if ? (
    //       React.Children.map(this.props.children, (item: any) =>
    //         this.props.animation
    //           ? React.cloneElement(item, {
    //               ...item.props,
    //               className: `${item.props.className} transirion-${this.props.animation} ${this.state.classNames}`,
    //             })
    //           : item,
    //       )
    //     ) : (
    //       <></>
    //     )}
    //   </>
    // )
  }
}

// const Maybe: React.FC<TypeProps> = (props: TypeProps) => {
//   return (
//     <>
//       {props.if ? (
//         React.Children.map(props.children, (item: any) =>
//           props.animation
//             ? React.cloneElement(item, {
//                 ...item.props,
//                 className: `${item.props.className} transirion-${props.animation}`,
//               })
//             : item,
//         )
//       ) : (
//         <></>
//       )}
//     </>
//   )
// }

export default Maybe
