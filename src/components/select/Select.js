import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

const SelectContainer = styled.div`
  position: relative;
`;

const SelectElement = styled.select`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 0;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
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

const Icon = styled(AiOutlineDown)`
  position: absolute;
  right: 10px;
  top: 11px;
  /* fill: #000; */
  color: #000;
  z-index: 5;
  font-size: 18px;
`;

const Error = styled.div`
  margin: 5px 0;
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.theme.colors.red};
`;

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
  const [v, setValue] = useState(value || '');
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <SelectContainer className={className}>
      <SelectElement
        ref={ref}
        error={error}
        placeholder={placeholder}
        value={v}
        onChange={handleChange}
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