import React, { useState } from 'react';
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
  { placeholder, value, label, onChange, name, error, errorMessage, className },
  ref,
) {
  const [v, setValue] = useState(value || '');
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <RadioButtonContainer className={className}>
      <RadioButtonElement
        ref={ref}
        error={error}
        type="radio"
        placeholder={placeholder}
        value={v}
        onChange={handleChange}
        id={value}
        name={name}
      />
      <Label htmlFor={value}>{label}</Label>
    </RadioButtonContainer>
  );
});
