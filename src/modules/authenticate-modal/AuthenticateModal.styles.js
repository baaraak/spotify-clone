import styled from 'styled-components';
import AuthModalBG from 'images/auth-modal-bg.jpg';
import ButtonComponent from 'components/button/Button';

export const AuthModal = styled.div`
  background: url(${AuthModalBG}) center center no-repeat;
  background-size: cover;
  border-radius: 15px;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 810px;
`;

export const List = styled.div`
  margin: 30px 0 20px;
`;

export const ListItem = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-weight: 500;

  svg {
    margin-right: 10px;
    font-size: 17px;
  }
`;

export const H2 = styled.div`
  font-size: 46px;
  font-weight: 700;
`;

export const Close = styled.div`
  font-size: 12px;
  margin: 15px 0;
  display: inline-block;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    border-bottom-color: ${props => props.theme.colors.white};
  }
`;

export const ModalInfo = styled.div``;

export const ModalActions = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.3),
    0 24px 16px -5px rgba(0, 0, 0, 0.17);
  border-radius: 8px;
  padding: 30px;
  margin-left: 15px;
`;

export const ButtonLogin = styled(ButtonComponent)`
  font-size: 18px;
  padding: 15px;
  background: ${props => props.theme.colors.green};
`;

export const ButtonSignup = styled(ButtonComponent)`
  font-size: 18px;
  padding: 18px;
  border: 1px solid ${props => props.theme.colors.mainBlackDark};
  color: ${props => props.theme.colors.mainBlackDark};
`;

export const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.text};
  margin: 32px 8px 26px;
`;

export const Account = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme.colors.mainBlackDark};
  margin-bottom: 10px;
`;
