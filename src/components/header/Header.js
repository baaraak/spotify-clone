import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: header;
  background: blue;
  position: sticky;
  background: rgba(0, 0, 0, 0.1);
`;

export default function Header() {
  return <Container>Header</Container>;
}
