import styled from 'styled-components';

export const GridPageContainer = styled.div`
  grid-area: page;
  background: green;
  overflow: hidden;
  background: #121212;
  overflow-y: scroll;
  margin-top: -${props => props.theme.headerHeight};
  padding-top: ${props => props.theme.headerHeight};
`;
