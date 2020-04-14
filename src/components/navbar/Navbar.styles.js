import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const NavItemLink = styled(Link)`
  margin-bottom: 5px;
  color: #b3b3b3;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: ${({ active, theme }) => (active ? theme.colors.gray : '')};
  color: ${({ active, theme }) => (active ? theme.colors.white : '')};
  transition: all 0.2s ease-in;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

export const NavIcon = styled.span`
  margin-right: 15px;
`;
