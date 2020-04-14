import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from 'context/auth-context';
import AppTheme from 'context/theme.context';

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
