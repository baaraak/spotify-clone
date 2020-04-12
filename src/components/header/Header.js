import React from 'react';
import styled from 'styled-components';

import NavigationButtons from './NavigationButtons.component';

const Container = styled.div`
  display: flex;
  align-items: center;
  grid-area: header;
  position: sticky;
  background: rgba(0, 0, 0, 0.3);
  height: ${props => props.theme.headerHeight};
`;

export default function Header() {
  return (
    <Container>
      <NavigationButtons />
    </Container>
  );
}
