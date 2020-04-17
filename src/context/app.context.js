import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FirebaseProvider from './firebase.context';
import Firebase from 'services/firebase';
import { AuthProvider } from './auth.context';
import AppTheme from './theme.context';

function AppProviders({ children }) {
  return (
    <Router>
      <FirebaseProvider value={new Firebase()}>
        <AppTheme>
          <AuthProvider>{children}</AuthProvider>
        </AppTheme>
      </FirebaseProvider>
    </Router>
  );
}

export { AppProviders };
