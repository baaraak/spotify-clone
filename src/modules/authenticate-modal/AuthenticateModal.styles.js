import styled from 'styled-components';
import AuthModalBG from '../../images/auth-modal-bg.jpg';

export const AuthModal = styled.div`
  background: url(${AuthModalBG}) center center no-repeat;
  background-size: cover;
  border-radius: 15px;
  padding: 30px;
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
  svg {
    margin-right: 10px;
  }
`;

export const H2 = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export const Close = styled.div``;

export const ModalInfo = styled.div``;

export const ModalActions = styled.div``;

export const Button = styled.div``;

export const Divider = styled.div``;

export const Account = styled.div``;
