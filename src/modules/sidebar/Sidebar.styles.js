import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sidebar;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled(Link)`
  padding-left: 15px;
`;

export const Footer = styled.div`
  margin-top: auto;
  text-align: center;
  margin-bottom: 75px;
`;

export const FooterLink = styled.a`
  text-align: center;
  font-size: 11px;
  color: ${props => props.theme.colors.text};
  margin-bottom: 5px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.text};
  }
`;

export const Hr = styled.hr`
  width: 10px;
  height: 1px;
  border: none;
  margin: 5px auto 10px;
  background: ${props => props.theme.colors.text};
`;
