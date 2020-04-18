import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useFirebase } from 'context/firebase.context';

export default function RestrictedRoute({ children, ...rest }) {
  const { user } = useFirebase();
  return (
    <Route
      {...rest}
      render={props => (user ? <Redirect to="/" /> : children)}
    />
  );
}
