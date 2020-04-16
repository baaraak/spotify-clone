import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Button from 'components/button/Button';
import Select from 'components/select/Select';
import RadioButtonComponent from 'components/radio-button/RadioButton';
import CheckboxComponent from 'components/checkbox/Checkbox';
import { Link } from 'react-router-dom';
import {
  Line,
  Input,
  Divider,
  Form,
  Logo,
  SubmitButton,
  ContentContainer,
  PageContainer,
} from '../auth.styles';
import { Error } from 'styles/common.styles';
import { months } from 'utils/months';

const FacebookButton = styled(Button)`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  padding: 15px 40px;
  background: ${props => props.theme.colors.facebook};
  margin-bottom: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

const AccountTitle = styled.div`
  color: ${props => props.theme.colors.mainBlackDark};
  font-weight: 600;
  text-align: center;
  font-size: 16px;
`;

const Copyrights = styled.div`
  color: ${props => props.theme.colors.mainBlackDark};
  font-size: 10px;
  font-weight: 500;
  margin: 20px 0;
  text-align: center;
  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
  }
`;

const CopyrightsTerms = styled.div`
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #919496;
  margin-bottom: 20px;
`;

const ForgotPasswordLink = styled.div`
  color: ${props => props.theme.colors.mainBlackDark};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  display: block;
  text-decoration: none;
  margin: 20px 0;

  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
  }
`;

const BirthDate = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  row-gap: 5px;
  column-gap: 25px;
`;

const BirthDateLabel = styled.div`
  grid-column: 1 / -1;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Gender = styled.div`
  display: flex;
  margin: 15px 0 25px;
  flex-wrap: wrap;
`;

const RadioButton = styled(RadioButtonComponent)`
  margin-right: 5px;
  flex: 0 0 20%;
  white-space: nowrap;
`;

export default function Signup() {
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
        <FacebookButton>SIGN UP WITH FACEBOOK</FacebookButton>
        <Divider>
          <Line />
          OR
          <Line />
        </Divider>
        <AccountTitle>Sign up with your email address</AccountTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
            error={errors.email}
            errorMessage="Please enter your email."
          />
          <Input
            name="confirmEmail"
            type="email"
            placeholder="Confirm email"
            ref={register({ required: true })}
            error={errors.email}
            errorMessage="Please enter your email."
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
            error={errors.password}
            errorMessage="Enter a password to continue."
          />
          <Input
            name="name"
            placeholder="What should we call you?"
            ref={register({ required: true })}
            error={errors.name}
            errorMessage="What should we call you?"
          />
          <BirthDate>
            <BirthDateLabel>Date of birth</BirthDateLabel>
            <Input
              name="day"
              placeholder="Day"
              ref={register({ required: true })}
              error={errors.day}
              errorMessage="Please enter a valid day of the month."
            />
            <Select
              name="month"
              placeholder="Month"
              ref={register({ required: true })}
              error={errors.month}
              errorMessage="Please enter your birth month."
              options={[
                { value: -1, label: 'Month' },
                ...months.map((m, i) => ({ value: i, label: m })),
              ]}
            />
            <Input
              name="year"
              placeholder="Year"
              ref={register({ required: true })}
              error={errors.year}
              errorMessage="Please enter a valid year."
            />
          </BirthDate>
          <Gender>
            <RadioButton
              ref={register({ required: true })}
              label="Male"
              name="gender"
              value="male"
            />
            <RadioButton
              ref={register({ required: true })}
              label="Female"
              name="gender"
              value="female"
            />
            <RadioButton
              ref={register({ required: true })}
              label="Non-binary"
              name="gender"
              value="non-binary"
            />
            {errors.gender && <Error>Please indicate your gender.</Error>}
          </Gender>
          <CheckboxLabel>
            <CheckboxComponent ref={register} name="subscription" />
            Please send me Spotify marketing messages.
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxComponent ref={register} name="marketing" />
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </CheckboxLabel>
          <Copyrights>
            <CopyrightsTerms>
              By clicking on Sign up, you agree to Spotify's{' '}
              <a href="/" target="_blank">
                Terms and Conditions of Use.
              </a>
            </CopyrightsTerms>
            To learn more about how Spotify collects, uses, shares and protects
            your personal data please read Spotify's{' '}
            <a href="/" target="_blank">
              Privacy Policy.
            </a>
          </Copyrights>
          <SubmitButton type="submit">SIGN UP</SubmitButton>
        </Form>
        <ForgotPasswordLink>
          Already have an account? <Link to="/login">Log in</Link>
        </ForgotPasswordLink>
      </ContentContainer>
    </PageContainer>
  );
}
