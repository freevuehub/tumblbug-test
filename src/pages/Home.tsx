import React from 'react'
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'
import {
  ProfilePage,
  AccountPage,
  PaymethodPage,
  AddressPage,
  NotificationPage,
} from '../pages'

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { pathname } = props.location

  return pathname === '/' ? (
    <Redirect to="/profile" />
  ) : (
    <div className="container">
      <Route path="/profile" component={ProfilePage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/paymethod" component={PaymethodPage} />
      <Route path="/address" component={AddressPage} />
      <Route path="/notification" component={NotificationPage} />
    </div>
  )
}

export default withRouter(Home)
