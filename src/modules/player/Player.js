import React from 'react';

import PlayerDetails from './components/Player.details';
import PlayerVolume from './components/Player.volume';
import PlayerActions from './components/Player.actions';

export default function Player({ user }) {
  return (
    <React.Fragment>
      {user && <PlayerDetails />}
      <PlayerActions />
      {user && <PlayerVolume />}
    </React.Fragment>
  );
}
