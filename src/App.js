import React, { Component } from "react";
import "./App.css";

import Sidebar from "./page/components/sidebar";
import AppLayout from "./page/components/app-layout";
import ContentLayout from "./page/components/content-layout";
import Header from "./header";
import BalanceTool from "./balance-tool/containers/balance-tool";

class App extends Component {
  state = {
    show: false,
  }

  showNotif = event => {
    if(event.target.getAttribute('action') === 'close'){
      this.setState({
        show: false,
      })
    } else {
      this.setState({
        show: true,
      })
      setTimeout(() => {
        this.setState({
          show: false,
        })},
        3000
      )
    }
  }

  render() {
    return (
      <AppLayout>
        <Sidebar 
          title="Contabilidad Electrónica"
          showNotif={this.showNotif}          
        />
        <ContentLayout>
          <Header 
            show={this.state.show}
            showNotif={this.showNotif}
          />
          <BalanceTool />
        </ContentLayout>
      </AppLayout>
    );
  }
}

export default App;
