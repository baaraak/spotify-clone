import React from 'react';
import { Nav, NavIcon, NavItemLink } from './Navbar.styles';
export default function Navbar({ items }) {
  return (
    <Nav>
      {items.map(item => (
        <NavItemLink
          key={item.id}
          to={item.href}
          active={item.id === 'home' ? 1 : 0}
        >
          <NavIcon>{item.icon && item.icon({ size: '23px' })}</NavIcon>
          {item.label}
        </NavItemLink>
      ))}
    </Nav>
  );
}
