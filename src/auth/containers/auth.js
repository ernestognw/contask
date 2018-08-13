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
  authInputChange = event => {
    this.props.actions.authInputChange(event.target.id, event.target.value);
  }

  handleSignup = event => {
    event.preventDefault();
    if (this.props.arePasswordsEqual){
      this.props.actions.handleSignupAsync(this.props.username, this.props.email, this.props.password);
      this.props.history.push('/')
    } else {
      this.props.actions.equalPasswordsRequired()
    }
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.actions.handleLoginAsync(this.props.email, this.props.password);
  }

  handleFBLogin = event => {
    this.props.actions.handleFBLoginAsync();
  }

  componentDidUpdate() {
    if(this.props.redirectFromLogin) { 
      this.props.history.push('/')
    } 
  }

  render() {
    return (
      <AuthLayout>
        <Switch>
          <Route path="/auth/login" render={props => (
            <AuthLogin 
              handleLogin={this.handleLogin}
              handleFBLogin={this.handleFBLogin}
              authInputChange={this.authInputChange}

              email={this.props.email}
              password={this.props.password}
            />
            )} />
          <Route path="/auth/signup" render={props => (
            <AuthSignup 
              handleSignup={this.handleSignup}
              handleFBLogin={this.handleFBLogin}              
              authInputChange={this.authInputChange}

              email={this.props.email}
              password={this.props.password}
              username={this.props.username}
              verifyPassword={this.props.verifyPassword}
              isVerifyPasswordInput={this.props.isVerifyPasswordInput} 
              arePasswordsEqual={this.props.arePasswordsEqual}
              message={this.props.passwordsNotEqualMessage}             
            />
          )} />
          <Route component={() => <Redirect to="/auth/login"/>}/>                  
        </Switch>
      </AuthLayout>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
