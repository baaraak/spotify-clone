import React from 'react';
import { Container, Track, Time } from './TrackBar.styles';

export default function TrackBar({ length, playing, currentTime }) {
  return (
    <Container>
      <Time>0:00</Time>
      <Track />
      <Time>0:00</Time>
    </Container>
  );
}
