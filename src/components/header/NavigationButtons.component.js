import React from 'react';
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { NavbarItems } from 'components/sidebar/Sidebar.constant';

const Container = styled.div`
  display: flex;
  padding-left: 25px;
`;

const NavigationIcon = styled.span`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  backgrgound: rgba(0, 0, 0, 0.3);
  color: #b3b3b3;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: #fff;
  }
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
