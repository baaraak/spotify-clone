import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

import { NavbarItems } from './Sidebar.constant';
import Playlists from './Playlists.component';

const Container = styled.div`
  grid-area: sidebar;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled(Link)`
  padding-left: 15px;
`;

export default function Sidebar() {
  return (
    <Container>
      <StyledLogo to="/">
        <Logo />
      </StyledLogo>
      <Navbar items={NavbarItems} />
      <Playlists />
    </Container>
  );
}
