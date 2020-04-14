import React from 'react';
import styled from 'styled-components';
import LogoComponent from 'components/Logo';
import { GridPageContainer } from 'styles/page.styles';

const Container = styled(GridPageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #8c1932, #ff6437 60%);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${props => props.theme.zIndex.notFound};
`;

const Logo = styled(LogoComponent)`
  position: absolute;
  left: 20px;
  top: 30px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export default function NotFound() {
  return (
    <Container>
      <Logo width="100px" />
      <Title>Sorry, couldn't find that.</Title>
    </Container>
  );
}
