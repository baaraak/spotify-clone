import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button/Button';

const Banner = styled.div`
  padding: 15px 30px;
  background: linear-gradient(90deg, #af2896, #509bf5);
  position: absolute;
  width: 100%;
  height: 75px;
  margin-top: -81px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-top: 1px solid #000;
`;

const Title = styled.div`
  font-size: 11px;
  margin-bottom: 7px;
  letter-spacing: 1.2px;
`;

const Text = styled.div`
  font-size: 15px;
`;

const CustomButton = styled(Button)`
  color: ${props => props.theme.colors.blue};
  font-size: 15px;
  padding: 10px 45px;
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
      <CustomButton>SIGN UP FREE</CustomButton>
    </Banner>
  );
}
