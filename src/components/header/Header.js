import React from 'react';
import styled from 'styled-components';

import NavigationButtons from './NavigationButtons.component';

const Container = styled.div`
  grid-area: header;
  position: sticky;
  background: rgba(0, 0, 0, 0.3);
  margin-top: -60px;
  padding-top: 70px;
`;

export default function Header() {
  return (
    <Container>
      <NavigationButtons />
    </Container>
  );
}
