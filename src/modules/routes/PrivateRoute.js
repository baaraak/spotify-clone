import React, { useState } from 'react';
import { useAuth } from 'context/auth.context';
import { Route, Redirect } from 'react-router-dom';
import AuthenticateModal from 'modules/authenticate-modal/AuthenticateModal';

export default function PrivateRoute({ children, ...rest }) {
  const [redirect, setRedirect] = useState(false);
  const { user } = useAuth();

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          children
        ) : (
          <AuthenticateModal isOpen onClose={() => setRedirect(true)} />
        )
      }
    />
  );
}
