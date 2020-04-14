import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Sidebar from 'modules/sidebar/Sidebar';
import Header from 'modules/header/Header';
import Footer from 'modules/footer/Footer';

import Routes from 'modules/routes';

import Spinner from './Spinner';

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

export default function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Grid>
        <Sidebar />
        <Header />
        <Switch>
          {Routes.map(route => {
            const RouteComponent = route.auth ?? Route;
            const ChildRoute = route.component;
            return (
              <RouteComponent
                key={route.id}
                path={route.path}
                exact={route.exact}
              >
                <ChildRoute />
              </RouteComponent>
            );
          })}
        </Switch>
        <Footer />
      </Grid>
    </React.Suspense>
  );
}
