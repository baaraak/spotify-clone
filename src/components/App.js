import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../modules/sidebar/Sidebar';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Spinner from './Spinner';
import Library from 'screens/Library';
import PrivateRoute from 'modules/routes/PrivateRoute';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar header'
    'sidebar page'
    'footer footer';
  grid-template-columns: 230px 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
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
      <Route path="/search">
        <Search />
      </Route>
      <PrivateRoute path="/library">
        <Library />
      </PrivateRoute>
    </Switch>
  );
}

export { App };
