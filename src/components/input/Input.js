import React from 'react';
import { Error } from 'styles/common.styles';
import { InputContainer, InputElement } from './Input.styles';

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
