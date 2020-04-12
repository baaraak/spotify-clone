import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Footer from './footer/Footer';

import Home from 'screens/Home';
import { FullPageSpinner } from './lib';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar header'
    'sidebar page'
    'footer footer';
  grid-template-columns: 230px 1fr;
  height: 100%;
`;

function App() {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <Grid>
        <Sidebar />
        <Header />
        <Routes />
        <Footer />
      </Grid>
    </React.Suspense>
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export { App };
