import React, { Component } from "react";
import "./webApp.css";

import Sidebar from "../components/sidebar";
import ContentLayout from "../components/content-layout";
import Header from "../components/header";
import BalanceTool from "../../balance-tool/containers/balance-tool";
import AppLayout from "../components/app-layout";
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  state = {
    showNotif: false,
    authUser: null,
  };

  signOut = event => {
    this.props.actions.handleSignout();
  }

  notifHandler = event => {
    console.log("reached")
    if (event.target.getAttribute("action") === "close") {
      this.setState({
        showNotif: false
      });
    } else {
      this.setState({
        showNotif: true
      });
      setTimeout(() => {
        this.setState({
          showNotif: false
        });
      }, 4000);
    }
  };

  render() {
    return(
      <AppLayout>
        <Sidebar
          title="Contabilidad Electrónica"
          notifHandler={this.notifHandler}
        />
        <ContentLayout>
          <Header photoURL={this.props.currentUser.photoURL} signOut={this.signOut} showNotif={this.state.showNotif} notifHandler={this.notifHandler} />
          <BalanceTool />
        </ContentLayout>
      </AppLayout>
    )
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state, props) {
  return {
    ...state.auth
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
