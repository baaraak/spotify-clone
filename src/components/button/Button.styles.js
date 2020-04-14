import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  border-radius: 50%;
  letter-spacing: 1.3px;
  border-radius: 500px;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.3, 0, 0, 1);
  padding: 12px 40px;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  border: 1px solid ${props => props.theme.colors.white};
  background: transparent;
  color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.06);
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
