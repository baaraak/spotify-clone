import React from 'react';

import { ButtonContainer } from './Button.styles';

export default React.forwardRef(
  (
    {
      outlined = false,
      children,
      filled = true,
      className,
      color = 'default',
      fullWidth = false,
      onClick,
    },
    ref,
  ) => {
    return (
      <ButtonContainer
        color={color}
        fullWidth={fullWidth}
        className={className}
        filled={filled}
        outlined={outlined}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    );
  },
);
