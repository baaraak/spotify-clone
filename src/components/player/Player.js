import React from 'react';

import PlayerDetails from './components/Player.details';
import PlayerVolume from './components/Player.volume';
import PlayerActions from './components/Player.actions';

export default function Player({ authenticated, onPlay, onUnauthenticated }) {
  const handlePlay = () => {
    if (!authenticated) return onUnauthenticated();
  };
  return (
    <React.Fragment>
      {authenticated && <PlayerDetails />}
      <PlayerActions handlePlay={handlePlay} />
      {authenticated && <PlayerVolume />}
    </React.Fragment>
  );
}
