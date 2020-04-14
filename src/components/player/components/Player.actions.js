import React from 'react';
import {
  IoIosPlay,
  IoIosShuffle,
  IoMdSkipForward,
  IoMdSkipBackward,
  IoIosRepeat,
} from 'react-icons/io';

import TrackBar from 'components/trackbar/TrackBar';
import {
  PlayerActionsContainer,
  PlayerIcon,
  PlayerIcons,
} from '../Player.styles';

export default function PlayerActions({ handlePlay }) {
  return (
    <PlayerActionsContainer>
      <PlayerIcons>
        <PlayerIcon onClick={handlePlay}>
          <IoIosShuffle size="21px" />
        </PlayerIcon>
        <PlayerIcon onClick={handlePlay}>
          <IoMdSkipBackward size="16px" />
        </PlayerIcon>
        <PlayerIcon rounded onClick={handlePlay}>
          <IoIosPlay size="21px" />
        </PlayerIcon>
        <PlayerIcon onClick={handlePlay}>
          <IoMdSkipForward size="16px" />
        </PlayerIcon>
        <PlayerIcon onClick={handlePlay}>
          <IoIosRepeat size="21px" />
        </PlayerIcon>
      </PlayerIcons>
      <TrackBar onClick={handlePlay} />
    </PlayerActionsContainer>
  );
}
