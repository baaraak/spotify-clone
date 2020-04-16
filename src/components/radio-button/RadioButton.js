import React from 'react';
import {
  RadioButtonContainer,
  RadioButtonElement,
  Label,
} from './RadioButton.styles';

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
