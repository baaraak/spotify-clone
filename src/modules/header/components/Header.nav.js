import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Nav, NavigationIcon } from '../Header.styles';

export default function HeaderNav() {
  return (
    <Nav>
      <NavigationIcon>
        <AiOutlineLeft size="20px" />
      </NavigationIcon>
      <NavigationIcon>
        <AiOutlineRight size="20px" />
      </NavigationIcon>
    </Nav>
  );
}
