import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  border-radius: 50%;
  letter-spacing: 1.3px;
  border-radius: 500px;
  font-weight: 600;
  transition: all 0.1s cubic-bezier(0.3, 0, 0, 1);
  padding: 12px 40px;
  cursor: pointer;
  text-align: center;
  font-size: 11px;
  border: 1px solid ${props => props.theme.colors.white};
  background: transparent;
  color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.05);
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
