import React from 'react';
import styled from 'styled-components';

import Player from 'modules/player/Player';
import { useAuth } from 'context/auth-context';

const Container = styled.div`
  grid-area: footer;
  padding: 10px 0;
  background: ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  const { user } = useAuth();
  return (
    <Container>
      <Player user={user} />
    </Container>
  );
}
