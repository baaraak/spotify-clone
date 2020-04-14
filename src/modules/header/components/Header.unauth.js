import React from 'react';
import {
  AuthenticateActions,
  ButtonLogin,
  ButtonSignup,
} from '../Header.styles';

export default function UnAuthHeader() {
  return (
    <AuthenticateActions>
      <ButtonSignup filled={false}>SIGN UP</ButtonSignup>
      <ButtonLogin>LOG IN</ButtonLogin>
    </AuthenticateActions>
  );
}
