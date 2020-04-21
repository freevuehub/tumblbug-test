import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface TypeProps {
  list: {
    name: string
    path: string
  }[]
}

const LinkNav: React.FC<TypeProps> = (props: TypeProps) => {
  const { list } = props

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

export default LinkNav
