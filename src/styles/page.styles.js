import styled, { keyframes } from 'styled-components';

const enterPageAnimation = keyframes`
  to {opacity: 1;}
`;

export const GridPageContainer = styled.div`
  grid-area: page;
  background: green;
  overflow: hidden;
  background: #121212;
  overflow-y: scroll;
  margin-top: -${props => props.theme.headerHeight}px;
  padding: ${props => props.theme.headerHeight + 16}px 32px;
  opacity: 0;
  animation: ${enterPageAnimation} 0.3s forwards;
`;
