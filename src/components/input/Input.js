import React from 'react';
import styled, { css } from 'styled-components';
import { Error } from 'styles/common.styles';

const InputContainer = styled.div``;

const InputElement = styled.input`
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

export default React.forwardRef(function Input(
  { type = 'text', placeholder, value, name, error, errorMessage, className },
  ref,
) {
  return (
    <InputContainer className={className}>
      <InputElement
        ref={ref}
        error={error}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      {error && <Error>{errorMessage}</Error>}
    </InputContainer>
  );
});
