import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  padding: 10px 30px;
  background: linear-gradient(90deg, #af2896, #509bf5);
  position: absolute;
  bottom: 85px;
  width: 100%;
  height: 75px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const Title = styled.div`
  font-size: 11px;
  margin-bottom: 7px;
  letter-spacing: 1.2px;
`;

const Text = styled.div`
  font-size: 15px;
`;

const Button = styled.div`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.blue};
  font-weight: 500;
  font-size: 15px;
  padding: 10px 55px;
  border-radius: 500px;
`;

export default function SignupPreviewBanner(params) {
  return (
    <Banner>
      <div>
        <Title>PREVIEW OF SPOTIFY</Title>
        <Text>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed
        </Text>
      </div>
      <Button>SIGN UP FREE</Button>
    </Banner>
  );
}
