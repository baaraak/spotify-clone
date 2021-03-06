import { GridPageContainer } from 'styles/page.styles';
import LogoComponent from 'components/Logo';
import InputComponent from 'components/input/Input';
import Button from 'components/button/Button';
import styled from 'styled-components';

export const PageContainer = styled(GridPageContainer)`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Form = styled.form`
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(InputComponent)`
  margin-bottom: 15px;
`;

export const ContentContainer = styled.div`
  max-width: 450px;
  margin-top: 30px;
`;

export const Logo = styled(LogoComponent)`
  margin: 15px 0;
`;

export const Line = styled.div`
  background: ${props => props.theme.colors.lightGray};
  height: 1px;
  min-height: 1px;
  width: 100%;
`;

export const Divider = styled.div`
  margin: 20px 0;
  color: ${props => props.theme.colors.mainBlackDark};
  font-weight: 600;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: 30px;
`;

export const SubmitButton = styled(Button)`
  background: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  padding: 16px 70px;
  font-size: 15px;
`;

export const ErrorContainer = styled.div`
  background: ${props => props.theme.colors.red};
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`;

export const FacebookButton = styled(Button)`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  padding: 15px 0;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.facebook};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 15px;
    font-size: 17px;
  }
`;
