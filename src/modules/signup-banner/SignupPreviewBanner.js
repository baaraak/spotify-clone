import React from 'react';
import styled from 'styled-components';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';

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
  font-weight: 500;
`;

const Title = styled.div`
  font-size: 11px;
  margin-bottom: 10px;
  letter-spacing: 1.2px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const CustomButton = styled(Button)`
  color: ${props => props.theme.colors.blue};
  background: ${props => props.theme.colors.white};
  font-size: 14px;
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
      <Link to="signup">
        <CustomButton>SIGN UP FREE</CustomButton>
      </Link>
    </Banner>
  );
}
