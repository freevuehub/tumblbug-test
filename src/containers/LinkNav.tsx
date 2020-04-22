import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavStoreState } from '../types'

interface TypeProps {
  list: {
    name: string
    path: string
  }[]
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

interface TypeNav {
  Nav: NavStoreState
}

export default connect(({ Nav }: TypeNav) => {
  return {
    list: Nav.list,
  }
})(LinkNav)
