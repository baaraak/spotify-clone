import React from 'react';

import { Container } from './Header.styles';
import HeaderNav from './components/Header.nav';
import AuthHeader from './components/Header.auth';
import UnAuthHeader from './components/Header.unauth';
import { useFirebase } from 'context/firebase.context';

export default function Header() {
  const { user } = useFirebase();
  return (
    <Container>
      <HeaderNav />
      {user ? <AuthHeader user={user} /> : <UnAuthHeader />}
    </Container>
  );
}
