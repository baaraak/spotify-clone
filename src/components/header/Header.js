import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: header;
  background: blue;
`;

export default function Header() {
  return <Container>Header</Container>;
}
