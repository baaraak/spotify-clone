import React from 'react';
import { AuthenticateActions, Button } from '../Header.styles';

export default function UnAuthHeader() {
  return (
    <AuthenticateActions>
      <Button>Sign up</Button>
      <Button color="white">Log in</Button>
    </AuthenticateActions>
  );
}
