import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseProvider } from './firebase.context';
import AppTheme from './theme.context';

function AppProviders({ children }) {
  return (
    <Router>
      <FirebaseProvider>
        <AppTheme>{children}</AppTheme>
      </FirebaseProvider>
    </Router>
  );
}

export { AppProviders };
