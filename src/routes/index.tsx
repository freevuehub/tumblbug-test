import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" />
    </Switch>
  </BrowserRouter>
)

export default Root
