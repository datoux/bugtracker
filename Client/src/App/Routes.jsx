import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import MainPage from 'Main';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* <Redirect exact from="/" to="/main" /> */}
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>
);

export default Routes;
