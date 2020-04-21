import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  ProfilePage,
  AccountPage,
  PaymethodPage,
  AddressPage,
  NotificationPage,
} from '../pages'

interface TypeProps {
  location: {
    pathname: string
  }
}

const Home: React.FC<TypeProps> = (props: TypeProps) => {
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

export default Home
