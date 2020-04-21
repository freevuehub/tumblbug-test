import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages'
import { LinkNav } from '../containers'

const Root: React.FC = () => (
  <div className="app">
    <h1 className="header-title">설정</h1>
    <BrowserRouter>
      <LinkNav
        list={[
          { path: '/profile', name: '프로필' },
          { path: '/account', name: '계정' },
          { path: '/paymethod', name: '결제수단' },
          { path: '/address', name: '배송지' },
          { path: '/notification', name: '알림' },
        ]}
      />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Root
