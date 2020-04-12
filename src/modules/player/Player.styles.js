import styled from 'styled-components';

export const PlayerActionsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 0;
  width: 40%;
  max-width: 722px;
`;

export const PlayerIcons = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const PlayerIcon = styled.span`
  margin: 0 10px;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-in;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  ${props =>
    props.rounded &&
    `
    padding-left: 7px; /* fix rounded icon center */
    border-radius: 50%;
    border: 1px solid ` + props.theme.colors.text}
`;

export const TrackBar = styled.div``;
