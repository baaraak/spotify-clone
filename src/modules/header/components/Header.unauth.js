import React from 'react';
import {
  AuthenticateActions,
  ButtonLogin,
  ButtonSignup,
} from '../Header.styles';
import { Link } from 'react-router-dom';

export default function UnAuthHeader() {
  return (
    <AuthenticateActions>
      <Link to="/signup">
        <ButtonSignup filled={false}>SIGN UP</ButtonSignup>
      </Link>
      <Link to="/login">
        <ButtonLogin>LOG IN</ButtonLogin>
      </Link>
    </AuthenticateActions>
  );
}
