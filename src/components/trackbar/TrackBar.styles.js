import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Track = styled.div`
  height: 3px;
  opacity: 0.5;
  width: 100%;
  border-radius: 3px;
  background: ${props => props.theme.colors.text};
`;

export const Time = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 11px;
  margin: 0 10px;
`;
