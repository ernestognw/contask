import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import webApp from '../containers/webApp';
import Auth from './../../auth/containers/auth';

import Loader from '../components/loader'

function MainRouter (props) {
  const PrivateRoute = ({ component: Component}) => (
    <Route render={() => (
        props.authenticating ?
          <Loader/>
          : props.currentUser !== null
            ? <Component {...props} />
            : <Redirect to='/auth/login' />
    )} />
  );

  return (
    <Switch>
      <Route path="/auth" component={Auth} /> 
      <Route path="/auth" component={Auth} />                 
      <PrivateRoute path='/' exact component={webApp} />
      <Route component={() => <h1>Error 404</h1>} />
    </Switch>
  );
}

export default MainRouter;