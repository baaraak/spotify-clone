import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth } from './context/auth-context';
import { FullPageSpinner } from './components/lib';

function Sidebar() {
  return <div>sidebar</div>;
}

function Header() {
  return <div>Header</div>;
}

function Footer() {
  return <div>Footer</div>;
}

function App() {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <Sidebar />
      <Header />
      <Switch>
        <Route exact path="/">
          home
        </Route>
      </Switch>
      <Footer />
    </React.Suspense>
  );
}

export { App };
