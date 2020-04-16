import React from 'react';
import { useState } from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from './Checkbox.styles';

export default React.forwardRef(
  ({ className, name, checked = false, ...props }, ref) => {
    const [isCheck, setChecked] = useState(checked);
    return (
      <CheckboxContainer className={className} ref={ref}>
        <HiddenCheckbox
          name={name}
          checked={isCheck}
          type="checkbox"
          ref={ref}
          onChange={() => setChecked(!isCheck)}
        />
        <StyledCheckbox checked={isCheck}>
          <Icon />
        </StyledCheckbox>
      </CheckboxContainer>
    );
  },
);
