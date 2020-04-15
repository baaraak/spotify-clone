import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { FaApple, FaFacebook } from 'react-icons/fa';

import { GridPageContainer } from 'styles/page.styles';
import LogoComponent from 'components/Logo';
import Button from 'components/button/Button';
import InputComponent from 'components/input/Input';

const PageContainer = styled(GridPageContainer)`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Input = styled(InputComponent)`
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  max-width: 450px;
  margin-top: 30px;
`;

const Logo = styled(LogoComponent)`
  margin: 15px 0;
`;

const Line = styled.div`
  background: ${props => props.theme.colors.lightGray};
  height: 1px;
  width: 100%;
`;

const Divider = styled.div`
  margin: 20px 0;
  color: ${props => props.theme.colors.mainBlackDark};
  font-weight: 600;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: 30px;
`;

const FacebookButton = styled(Button)`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  padding: 15px 0;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.mainBlackDark};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 15px;
    font-size: 17px;
  }

  ${props =>
    props.background === 'blue' &&
    css`
      background: ${props => props.theme.colors.facebook};
    `}
`;

const AccountTitle = styled.div``;

const LoginTitle = styled.h4`
  font-size: 14px;
  color: ${props => props.theme.colors.mainBlackDark};
  text-align: center;
`;

const SignupButton = styled.div``;

const Copyrights = styled.div``;

const FormFooter = styled.div`
  margin: 15px 0;
  color: #000;
`;

const Checkbox = styled.div``;

const ForgotPasswordLink = styled.div``;

const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export default function Login() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log('in submit', data);
  };
  console.log('***********************');
  console.log(errors);
  console.log('***********************');
  return (
    <PageContainer fullPage>
      <Logo fill="#000" width="190px" />
      <Line />
      <ContentContainer>
        <LoginTitle>To continue, log in to Spotify. </LoginTitle>
        <FacebookButton background="blue" fullWidth>
          <FaFacebook /> CONTINUE WITH FACEBOOK
        </FacebookButton>
        <FacebookButton fullWidth>
          <FaApple />
          CONTINUE WITH APPLE
        </FacebookButton>
        <Divider>
          <Line />
          OR
          <Line />
        </Divider>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            placeholder="Email address or username"
            ref={register({ required: true })}
            error={errors.email}
            errorMessage="Please enter your Spotify username or email address."
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
            error={errors.password}
            errorMessage="Please enter your password."
          />
          <FormFooter>
            <Checkbox checked>Remember me</Checkbox>
            <input type="submit" />
          </FormFooter>
        </Form>
        <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
        <Line />
        <AccountTitle>Don't have an account?</AccountTitle>
        <SignupButton>SIGN UP FOR SPOTIFY</SignupButton>
        <Line />
        <Copyrights>
          If you click "Log in with Facebook" and are not a Spotify user, you
          will be registered and you agree to Spotify's Terms & Conditions and
          Privacy Policy.
        </Copyrights>
      </ContentContainer>
    </PageContainer>
  );
}
