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
  margin: 20px 0;
`;

export const ListItem = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    font-size: 17px;
  }
`;

export const H2 = styled.div`
  font-size: 46px;
  font-weight: 600;
`;

export const Close = styled.div`
  font-size: 12px;
  margin: 15px 0;
  font-weight: 600;
  display: inline-block;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in;
  cursor: pointer;

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

export const Button = styled(ButtonComponent)``;

export const Divider = styled.div``;

export const Account = styled.div``;
