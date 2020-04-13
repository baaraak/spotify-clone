import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  border-radius: 50%;
  border: none;
  letter-spacing: 1.3px;
  border-radius: 500px;
  font-weight: 500;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.mainBlackDark};
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  padding: 12px 40px;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  &:hover {
    transform: scale(1.06);
  }

  ${props =>
    props.outlined &&
    css`
      background: transparent;
      border: 1px solid ${props => props.theme.colors.white};
    `}

  ${props =>
    !props.filled &&
    css`
      background: transparent;
      color: #fff;
    `}
`;
