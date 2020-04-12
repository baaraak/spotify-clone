import React from 'react';
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { NavbarItems } from 'components/sidebar/Sidebar.constant';

const Container = styled.div`
  display: flex;
`;

const NavigationIcon = styled.span`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  backgrgound: rgba(0, 0, 0, 0.3);
  color: #b3b3b3;
`;

export default function NavigationButtons() {
  return (
    <Container>
      <NavigationIcon>
        <AiOutlineLeft size="20px" />
      </NavigationIcon>
      <NavigationIcon>
        <AiOutlineRight size="20px" />
      </NavigationIcon>
    </Container>
  );
}
