import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const NavItemLink = styled(Link)`
  margin-bottom: 15px;
  color: #b3b3b3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const NavIcon = styled.span`
  margin-right: 15px;
`;

export default function Navbar({ items }) {
  return (
    <Nav>
      {items.map(item => (
        <NavItemLink key={item.id} to={item.href}>
          <NavIcon>{item.icon && item.icon({ size: '23px' })}</NavIcon>
          {item.label}
        </NavItemLink>
      ))}
    </Nav>
  );
}
