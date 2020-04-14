import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: page;
  background: green;
  overflow: hidden;
  overflow-y: scroll;
`;

export default function Login() {
  return <Container>login</Container>;
}
