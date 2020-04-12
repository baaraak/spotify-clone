import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme.styles';

export default function AppTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
