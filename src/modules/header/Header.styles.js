import styled from 'styled-components';
import Button from 'components/button/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-area: header;
  position: sticky;
  background: rgba(0, 0, 0, 0.3);
  height: ${props => props.theme.headerHeight}px;
  padding: 0 25px;
  z-index: ${props => props.theme.zIndex.header};
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

export const ButtonLogin = styled(Button)`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.mainBlackDark};
`;

export const ButtonSignup = styled(Button)`
  border: none;
`;
