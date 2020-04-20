import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { HomePage } from '../pages'

const Root: React.FC = () => (
  <div className="app">
    <h1>설정</h1>
    <BrowserRouter>
      <Link to="/profile">프로필</Link>
      <Link to="/account">계정</Link>
      <Link to="/paymethod">결제수단</Link>
      <Link to="/address">배송지</Link>
      <Link to="/notification">알림</Link>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Root
