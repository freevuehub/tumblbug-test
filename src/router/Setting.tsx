import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { HomePage } from '../pages'
import { LinkNav } from '../containers'

const Setting: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <>
      <h1 className="header-title">설정</h1>
      <LinkNav pathname={props.location.pathname} />
      <Route path="/" component={HomePage} />
    </>
  )
}

export default Setting
