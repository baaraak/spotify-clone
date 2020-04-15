import styled, { keyframes, css } from 'styled-components';

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

  ${props =>
    props.fullPage &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: ${props => props.theme.zIndex.page};
    `}
`;
