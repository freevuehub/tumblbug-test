import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavStoreState, NavItem } from '../types'

interface TypeProps {
  Nav: NavStoreState
}

class LinkNav extends React.PureComponent<TypeProps> {
  render(): React.ReactElement {
    const { Nav } = this.props

    return (
      <ul className="link-nav">
        {Nav.list.map((item: NavItem) => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(({ Nav }: TypeProps) => ({ Nav }))(LinkNav)
