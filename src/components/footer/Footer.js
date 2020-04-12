import React from 'react';
import styled from 'styled-components';
import {
  IoIosPlay,
  IoIosShuffle,
  IoMdSkipForward,
  IoMdSkipBackward,
  IoIosRepeat,
} from 'react-icons/io';
import { useAuth } from 'context/auth-context';

const Container = styled.div`
  grid-area: footer;
  padding: 10px 0;
  background: ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlayerActions = styled.div`
  margin: 0 auto;
`;
const PlayerBar = styled.div``;
const PlayerControl = styled.div``;

export default function Footer() {
  const { user } = useAuth();
  return (
    <Container>
      {user && <div>Player details</div>}
      <PlayerActions>
        <IoIosShuffle />
        <IoMdSkipBackward />
        <IoIosPlay />
        <IoMdSkipForward />
        <IoIosRepeat />
        <PlayerBar></PlayerBar>
      </PlayerActions>
      {user && <PlayerControl>con trol</PlayerControl>}
    </Container>
  );
}
