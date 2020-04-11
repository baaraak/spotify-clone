import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: sidebar;
  background: yellow;
`;

export default function Sidebar() {
  return <Container>Sidebar</Container>;
}
