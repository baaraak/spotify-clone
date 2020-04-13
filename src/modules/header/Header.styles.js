import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-area: header;
  position: sticky;
  background: rgba(0, 0, 0, 0.3);
  height: ${props => props.theme.headerHeight};
  padding: 0 25px;
`;

export const Nav = styled.div`
  display: flex;
`;

export const NavigationIcon = styled.span`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #b3b3b3;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: #fff;
  }
`;

export const AuthenticateActions = styled.div`
  margin-left: auto;
  display: flex;
`;
