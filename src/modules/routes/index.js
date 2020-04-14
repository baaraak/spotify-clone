import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Search from 'screens/Search';
import Library from 'screens/Library';
import Login from 'screens/Login';
import Signup from 'screens/Signup';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <RestrictedRoute path="/login">
        <Login />
      </RestrictedRoute>
      <RestrictedRoute path="/signup">
        <Signup />
      </RestrictedRoute>
      <PrivateRoute path="/library">
        <Library />
      </PrivateRoute>
    </Switch>
  );
}
