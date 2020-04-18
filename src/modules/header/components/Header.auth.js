import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import DefaultAvatar from 'images/avatar.jpg';
import useOnClickOutside from 'hooks/useClickOutside';
import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'context/firebase.context';

const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  transition: all 0.1s ease-in;
  padding: 4px;
  border-radius: 500px;
  position: relative;
  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Avatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 11px;
  margin: 0 10px;
`;

const Icon = styled.div`
  display: flex;
  margin-right: 3px;
  font-size: 18px;
`;

const DropMenu = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7);
  width: 170px;
`;

const DropMenuItem = styled.div`
  background: #282828;
  padding: 12px 20px;
  border-bottom: 1px solid #404040;
  transition: all 0.1s ease-out;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 13px;

  &:first-child {
    border-radius: 4px 4px 0 0;
  }
  &:last-child {
    border-radius: 0 0 4px 4px;
    border: none;
  }
  &:hover {
    background: #333;
    color: ${props => props.theme.colors.white};
  }
`;

export default function AuthHeader({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useFirebase();

  const ref = useRef();

  const toggleMenu = v => {
    setMenuOpen(v ?? !menuOpen);
  };

  useOnClickOutside(ref, () => toggleMenu(false));

  return (
    <Menu onClick={toggleMenu} className={menuOpen ? 'active' : ''}>
      <Avatar>
        <img src={user.photoURL || DefaultAvatar} alt="user avatar" />
      </Avatar>
      <Name>{user.displayName}</Name>
      <Icon>{menuOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</Icon>
      {menuOpen && (
        <DropMenu ref={ref}>
          <Link to="/account">
            <DropMenuItem>Account</DropMenuItem>
          </Link>
          <DropMenuItem onClick={logout}>Logout</DropMenuItem>
        </DropMenu>
      )}
    </Menu>
  );
}
