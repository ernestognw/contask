import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import webApp from './page/containers/webApp'
import Auth from './auth/containers/auth';

import firebase from 'firebase/app';
import 'firebase/auth';

import * as actions from "./actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.actions.verifyUserAsync();      
  }

  render(){
    return (
      <Switch>
        <Route path="/auth/" component={Auth} />
        <Route path="/" exact component={webApp} />
        <Redirect to="/auth/"/>
        <Route component={() => <h1>Cargando...</h1>} />
      </Switch>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 