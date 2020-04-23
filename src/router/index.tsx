import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages'
import { LinkNav, Toast } from '../containers'

const Root: React.FC = () => {
  return (
    <div className="app">
      <h1 className="header-title">설정</h1>
      <BrowserRouter>
        <LinkNav />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  )
}

export default Root
