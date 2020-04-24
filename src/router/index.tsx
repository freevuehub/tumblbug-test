import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toast } from '../containers'
import { useSystemDispatch } from '../contexts'
import { Confirm } from '../components'
import Setting from './Setting'

const Root: React.FC = () => {
  const dispatch = useSystemDispatch()
  const onAppClick = (): void => {
    dispatch({ type: 'TOOLTIP_ON_OFF', payload: false })
  }

  return (
    <div className="app" onClick={onAppClick}>
      <Toast />
      <Confirm />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Setting} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Root
