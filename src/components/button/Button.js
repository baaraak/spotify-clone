import React from 'react';

import { ButtonContainer } from './Button.styles';

export default function Button({
  outlined = false,
  children,
  filled = true,
  className,
}) {
  return (
    <ButtonContainer className={className} filled={filled} outlined={outlined}>
      {children}
    </ButtonContainer>
  );
}
