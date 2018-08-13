import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

import * as actions from "./actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainRouter from './page/containers/main-router';

class App extends Component {
  componentDidMount () {
    this.props.actions.verifyUserAsync();   
  }

  render(){
    return (
      <MainRouter 
        currentUser={this.props.currentUser}
        authenticating={this.props.authenticating}
      />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));