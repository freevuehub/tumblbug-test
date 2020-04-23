import React from 'react'

const Context = React.createContext({})
const { Provider, Consumer: SystemConsumer } = Context

interface TypeProps {
  children: React.ReactNode
}

class SystemProvider extends React.PureComponent<TypeProps> {
  state = {
    confirmView: false,
  }

  render(): React.ReactElement {
    const { state } = this
    return <Provider value={state}>{this.props.children}</Provider>
  }
}

export { SystemProvider, SystemConsumer }
