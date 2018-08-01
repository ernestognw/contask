import React, { Component } from "react";
import "./App.css";

import Sidebar from "./page/components/sidebar";
import AppLayout from "./page/components/app-layout";
import ContentLayout from "./page/components/content-layout";
import Header from "./header";
import BalanceTool from "./balance-tool/containers/balance-tool";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Sidebar 
          title="Contabilidad Electrónica"
        />
        <ContentLayout>
          <Header />
          <BalanceTool />
        </ContentLayout>
      </AppLayout>
    );
  }
}

export default App;
