import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const InputContainer = styled.div``;

const InputElement = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${props => props.theme.colors.lightGray};

  &:focus {
    border: 1px solid ${props => props.theme.colors.text};
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }

  ${props =>
    props.error &&
    css`
      border-color: ${props => props.theme.colors.red};
    `}
`;

const Error = styled.div`
  margin: 5px 0;
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.theme.colors.red};
`;

export default React.forwardRef(function Input(
  {
    type = 'text',
    placeholder,
    value,
    onChange,
    name,
    error,
    errorMessage,
    className,
  },
  ref,
) {
  const [v, setValue] = useState(value || '');
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <InputContainer className={className}>
      <InputElement
        ref={ref}
        error={error}
        type={type}
        placeholder={placeholder}
        value={v}
        onChange={handleChange}
        name={name}
      />
      {error && <Error>{errorMessage}</Error>}
    </InputContainer>
  );
});
