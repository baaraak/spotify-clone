import React from 'react';
import styled from 'styled-components';

import Sidebar from 'modules/sidebar/Sidebar';
import Header from 'modules/header/Header';
import Footer from 'modules/footer/Footer';

import Routes from 'modules/routes';

import Spinner from 'components/Spinner';

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
        <Routes />
        <Footer />
      </Grid>
    </React.Suspense>
  );
}
