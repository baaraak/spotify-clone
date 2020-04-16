import React from 'react';
import { Error } from 'styles/common.styles';
import { SelectContainer, SelectElement, Icon } from './Select.styles';

export default React.forwardRef(function Select(
  {
    placeholder,
    value,
    onChange,
    name,
    error,
    errorMessage,
    options,
    className,
  },
  ref,
) {
  return (
    <SelectContainer className={className}>
      <SelectElement
        ref={ref}
        error={error}
        placeholder={placeholder}
        value={value}
        name={name}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </SelectElement>
      <Icon />
      {error && <Error>{errorMessage}</Error>}
    </SelectContainer>
  );
});
