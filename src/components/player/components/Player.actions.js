import React from 'react';
import {
  IoIosPlay,
  IoIosShuffle,
  IoMdSkipForward,
  IoMdSkipBackward,
  IoIosRepeat,
} from 'react-icons/io';

import TrackBar from '../../trackbar/TrackBar';
import {
  PlayerActionsContainer,
  PlayerIcon,
  PlayerIcons,
} from '../Player.styles';

export default function PlayerActions({ handlePlay }) {
  return (
    <PlayerActionsContainer>
      <PlayerIcons>
        <PlayerIcon>
          <IoIosShuffle size="21px" />
        </PlayerIcon>
        <PlayerIcon>
          <IoMdSkipBackward size="16px" />
        </PlayerIcon>
        <PlayerIcon rounded onClick={handlePlay}>
          <IoIosPlay size="21px" />
        </PlayerIcon>
        <PlayerIcon>
          <IoMdSkipForward size="16px" />
        </PlayerIcon>
        <PlayerIcon>
          <IoIosRepeat size="21px" />
        </PlayerIcon>
      </PlayerIcons>
      <TrackBar />
    </PlayerActionsContainer>
  );
}
