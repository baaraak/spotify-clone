import styled, { css } from 'styled-components';

export const InputContainer = styled.div``;

export const InputElement = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.lightGray};

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
