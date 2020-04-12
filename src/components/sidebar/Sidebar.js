import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Navbar from './Navbar.component';

import { NavbarItems } from './Sidebar.constant';
import Playlists from './Playlists.component';

const Container = styled.div`
  grid-area: sidebar;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
`;

export default function Sidebar() {
  return (
    <Container>
      <Logo />
      <Navbar items={NavbarItems} />
      <Playlists />
    </Container>
  );
}
