import React from 'react';

import { ButtonContainer } from './Button.styles';

export default function Button({
  outlined = false,
  children,
  filled = true,
  className,
  color = 'default',
  fullWidth = false,
}) {
  return (
    <ButtonContainer
      color={color}
      fullWidth={fullWidth}
      className={className}
      filled={filled}
      outlined={outlined}
    >
      {children}
    </ButtonContainer>
  );
}
