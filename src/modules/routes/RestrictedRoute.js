import React from 'react';
import { useAuth } from 'context/auth-context';
import { Route, Redirect } from 'react-router-dom';

export default function RestrictedRoute({ children, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={props => (user ? <Redirect to="/" /> : children)}
    />
  );
}
