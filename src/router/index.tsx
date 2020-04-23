import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages'
import { LinkNav, Toast } from '../containers'
import { useSystemDispatch } from '../contexts'

const Root: React.FC = () => {
  const dispatch = useSystemDispatch()
  const onAppClick = (): void => {
    dispatch({ type: 'TOOLTIP_ON_OFF', payload: false })
  }

  return (
    <div className="app" onClick={onAppClick}>
      <Toast />
      <h1 className="header-title">설정</h1>
      <BrowserRouter>
        <LinkNav />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Root
