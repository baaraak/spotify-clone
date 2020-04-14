import React from 'react';
import { Container, Track, Time } from './TrackBar.styles';

export default function TrackBar({ length, playing, currentTime, onClick }) {
  return (
    <Container>
      <Time>0:00</Time>
      <Track onClick={onClick} />
      <Time>0:00</Time>
    </Container>
  );
}
