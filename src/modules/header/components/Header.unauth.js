import React from 'react';
import { AuthenticateActions } from '../Header.styles';
import Button from 'components/button/Button';

export default function UnAuthHeader() {
  return (
    <AuthenticateActions>
      <Button filled={false}>SIGN UP</Button>
      <Button>LOG IN</Button>
    </AuthenticateActions>
  );
}
