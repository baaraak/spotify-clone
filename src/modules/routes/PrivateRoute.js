import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticateModal from 'modules/authenticate-modal/AuthenticateModal';
import { useFirebase } from 'context/firebase.context';

export default function PrivateRoute({ children, ...rest }) {
  const [redirect, setRedirect] = useState(false);
  const { user } = useFirebase();

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
