import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
`;

const RadioButtonElement = styled.input``;

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  padding-left: 8px;
`;

export default React.forwardRef(function RadioButton(
  { placeholder, value, label, name, error, errorMessage, className },
  ref,
) {
  return (
    <RadioButtonContainer className={className}>
      <RadioButtonElement
        ref={ref}
        error={error}
        type="radio"
        placeholder={placeholder}
        id={value}
        value={value}
        name={name}
      />
      <Label htmlFor={value}>{label}</Label>
    </RadioButtonContainer>
  );
});
