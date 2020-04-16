import styled, { css } from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectElement = styled.select`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 0;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  &:focus {
    border: 1px solid ${props => props.theme.colors.text};
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text};
  }

  ${props =>
    props.error &&
    css`
      border-color: ${props => props.theme.colors.red};
    `}
`;

export const Icon = styled(AiOutlineDown)`
  position: absolute;
  right: 10px;
  top: 11px;
  /* fill: #000; */
  color: #000;
  z-index: 5;
  font-size: 18px;
`;
