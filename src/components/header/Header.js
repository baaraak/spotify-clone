import React from 'react';

import { Container } from './Header.styles';
import HeaderNav from './components/Header.nav';
import AuthHeader from './components/Header.auth';
import UnAuthHeader from './components/Header.unauth';

import { useAuth } from 'context/auth-context';

export default function Header() {
  const { user } = useAuth();
  return (
    <Container>
      <HeaderNav />
      {user ? <AuthHeader /> : <UnAuthHeader />}
    </Container>
  );
}
