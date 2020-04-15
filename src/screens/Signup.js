import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { GridPageContainer } from 'styles/page.styles';
import LogoComponent from 'components/Logo';

const Container = styled(GridPageContainer)`
  background: green;
`;

const Logo = styled(LogoComponent)`
  background: green;
`;

const Line = styled.div`
  background: green;
`;

const Divider = styled.div`
  background: green;
`;

const FacebookButton = styled.div`
  background: green;
`;

export default function Signup() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <Container fullPage>
      <Logo />
      <Line />
      <FacebookButton>CONTINUE WITH FACEBOOK</FacebookButton>
      <FacebookButton>CONTINUE WITH APPLE</FacebookButton>
      <Divider>
        <Line />
        Or
        <Line />
      </Divider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          placeholder="Email address or username"
          ref={register({ required: true })}
        />{' '}
        {/* register an input */}
        <input
          name="Password"
          type="password"
          ref={register({ required: true })}
        />
        {errors.lastname && 'Last name is required.'}
        <input type="submit" />
      </form>
    </Container>
  );
}
