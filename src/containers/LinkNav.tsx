import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { StoreState } from '../types'

interface TypeProps {
  list: {
    name: string
    path: string
  }[]
}

const mapStateToProps = (state: StoreState) => {
  return {
    list: state.nav.list,
  }
}
class LinkNav extends React.PureComponent<TypeProps> {
  render(): React.ReactElement {
    const { list } = this.props

    return (
      <ul className="link-nav">
        {list.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(LinkNav)
