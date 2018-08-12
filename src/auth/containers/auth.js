import React, { Component } from "react";

import AuthLayout from "../components/auth-layout";
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AuthLogin from '../components/auth-login';
import AuthSignup from '../components/auth-signup';
import { connect } from 'react-redux';
import * as actions from "../../actions/actions";
import { bindActionCreators } from 'redux';

class Auth extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  usernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  emailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  passwordChange = event => {
    this.setState({
      password: event.target.value
    }) 
  }

  handleSignup = event => {
    event.preventDefault();
    this.props.actions.handleSignup(this.state.username, this.state.email, this.state.password);
    this.props.history.push('/')
  };

  render() {
    return (
      <AuthLayout>
        <Switch>
          <Route path="/auth/login" component={AuthLogin} />
          <Route path="/auth/signup" render={props => (
            <AuthSignup 
              handleSignup={this.handleSignup}
              emailChange={this.emailChange}
              passwordChange={this.passwordChange}
              usernameChange={this.usernameChange}
              email={this.state.email}
              password={this.state.password}
              username={this.state.username}              
            />
          )} />
          <Route component={() => <Redirect to="/auth/login"/>}/>                  
        </Switch>
      </AuthLayout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Auth);
