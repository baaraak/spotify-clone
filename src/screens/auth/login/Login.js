import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { FaApple, FaFacebook } from 'react-icons/fa';

import Button from 'components/button/Button';

import CheckboxComponent from 'components/checkbox/Checkbox';
import { Link } from 'react-router-dom';
import {
  Line,
  Input,
  Divider,
  Form,
  Logo,
  ContentContainer,
  PageContainer,
} from '../auth.styles';

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

const AccountTitle = styled.div`
  margin-top: 35px;
  color: ${props => props.theme.colors.mainBlackDark};
  font-weight: 600;
  text-align: center;
  font-size: 18px;
`;

const LoginTitle = styled.h4`
  font-size: 14px;
  color: ${props => props.theme.colors.mainBlackDark};
  text-align: center;
`;

const SignupButton = styled(Button)`
  color: #616467;
  border: 2px solid #616467;
  margin: 15px 0 35px;
  padding: 14px 0;
  font-size: 14px;
`;

const Copyrights = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 10px;
  font-weight: 500;
  margin: 20px 0;
  text-align: center;
  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
  }
`;

const FormFooter = styled.div`
  margin: 15px 0;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #919496;
`;

const ForgotPasswordLink = styled(Link)`
  color: ${props => props.theme.colors.green};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  display: block;
  text-decoration: none;
  margin-bottom: 35px;

  &:hover {
    filter: brightness(115%);
  }
`;

const SubmitButton = styled(Button)`
  background: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  padding: 16px 70px;
  font-size: 15px;
`;

export default function Login() {
  const { register, handleSubmit, errors } = useForm({
    submitFocusError: false,
  });
  const onSubmit = data => {
    console.log('in submit', data);
  };
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
            <CheckboxLabel>
              <CheckboxComponent checked ref={register()} name="rememberMe" />
              Remember me
            </CheckboxLabel>
            <SubmitButton type="submit">LOG IN</SubmitButton>
          </FormFooter>
        </Form>
        <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
        <Line />
        <AccountTitle>Don't have an account?</AccountTitle>
        <Link to="/signup">
          <SignupButton fullWidth>SIGN UP FOR SPOTIFY</SignupButton>
        </Link>
        <Line />
        <Copyrights>
          If you click "Log in with Facebook" and are not a Spotify user, you
          will be registered and you agree to Spotify's{' '}
          <a href="/" target="_blank">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="/" target="_blank">
            Privacy Policy
          </a>
          .
        </Copyrights>
      </ContentContainer>
    </PageContainer>
  );
}