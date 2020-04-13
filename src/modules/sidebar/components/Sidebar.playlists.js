import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 200;
  letter-spacing: 1.4px;
`;

export default function Playlists({ playlists = [] }) {
  return (
    <Container>
      <Title>Playlists</Title>
      {playlists.map(item => (
        <div>playlist</div>
      ))}
    </Container>
  );
}
