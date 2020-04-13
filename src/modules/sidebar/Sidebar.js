import React from 'react';

import Logo from '../../components/Logo';
import { useLocation } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';

import { NavbarItems } from './Sidebar.constant';
import Playlists from './components/Sidebar.playlists';
import { useAuth } from 'context/auth-context';
import SiderbarFooter from './components/Sidebar.footer';

import { Container, StyledLogo } from './Sidebar.styles';

export default function Sidebar() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  return (
    <Container>
      <StyledLogo to="/">
        <Logo />
      </StyledLogo>
      <Navbar items={NavbarItems} selected={pathname} />
      {user && <Playlists />}
      {!user && <SiderbarFooter />}
    </Container>
  );
}
