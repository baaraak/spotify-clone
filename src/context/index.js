import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './auth-context';
import AppTheme from './theme.context';

function AppProviders({ children }) {
  return (
    <Router>
      <AppTheme>
        <AuthProvider>{children}</AuthProvider>
      </AppTheme>
    </Router>
  );
}

export { AppProviders };
