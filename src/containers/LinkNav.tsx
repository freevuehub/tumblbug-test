import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavStoreState, NavItem } from '../types'

interface TypeHooks {
  Nav: NavStoreState
}

const LinkNav: React.FC = () => {
  const { list } = useSelector(({ Nav }: TypeHooks) => Nav)

  return (
    <ul className="link-nav">
      {list.map((item: NavItem) => (
        <li key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default LinkNav
