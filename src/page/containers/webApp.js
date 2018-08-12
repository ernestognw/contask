import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./webApp.css";

import Sidebar from "../components/sidebar";
import ContentLayout from "../components/content-layout";
import Header from "../components/header";
import BalanceTool from "../../balance-tool/containers/balance-tool";
import AppLayout from "../components/app-layout";

import firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {
  state = {
    showNotif: false,
    authUser: null,
  };

  signOut = event => {
    firebase.auth().signOut()
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

  auth = () => {
    console.log(this.state.authUser)
  }

  render() {
    return(
      <AppLayout>
        <Sidebar
          title="Contabilidad Electrónica"
          notifHandler={this.notifHandler}
        />
        <ContentLayout>
          <Header signOut={this.signOut} showNotif={this.state.showNotif} notifHandler={this.notifHandler} />
          <BalanceTool />
          <button onClick={this.auth} className="btn btn-primary">Press</button>
        </ContentLayout>
      </AppLayout>
    )
  } 
}

export default App;
