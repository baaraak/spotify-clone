import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Search from 'screens/Search';
import Library from 'screens/Library';
import PrivateRoute from 'modules/routes/PrivateRoute';

export default function Routes() {
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
