import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { AppProviders } from './context';
import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
  <AppProviders>
    <GlobalStyles />
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
