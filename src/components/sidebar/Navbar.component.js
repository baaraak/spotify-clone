import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const NavItemLink = styled(Link)`
  margin-bottom: 5px;
  color: #b3b3b3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 7px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: ${({ active, theme }) => (active ? theme.colors.gray : '')};
  color: ${({ active, theme }) => (active ? theme.colors.white : '')};
  transition: all 0.2s ease-in;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

const NavIcon = styled.span`
  margin-right: 15px;
`;

export default function Navbar({ items }) {
  return (
    <Nav>
      {items.map(item => (
        <NavItemLink key={item.id} to={item.href} active={item.id === 'home'}>
          <NavIcon>{item.icon && item.icon({ size: '23px' })}</NavIcon>
          {item.label}
        </NavItemLink>
      ))}
    </Nav>
  );
}
