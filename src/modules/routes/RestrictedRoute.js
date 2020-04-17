import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RestrictedRoute({ children, ...rest }) {
  const { user } = {};
  return (
    <Route
      {...rest}
      render={props => (user ? <Redirect to="/" /> : children)}
    />
  );
}
