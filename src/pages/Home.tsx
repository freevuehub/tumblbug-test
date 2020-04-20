import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Redirect } from 'react-router-dom'
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

const Home: React.FC<TypeProps> = (props) =>
  props.location.pathname === '/' ? (
    <Redirect to="/profile" />
  ) : (
    <>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/paymethod" component={PaymethodPage} />
      <Route path="/address" component={AddressPage} />
      <Route path="/notification" component={NotificationPage} />
    </>
  )

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Home
