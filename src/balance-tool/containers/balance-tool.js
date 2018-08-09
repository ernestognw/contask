import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actions";
import { bindActionCreators } from "redux";
import Accounts from "../components/accounts";
import SubmitBalance from "../components/submit-balance";
import XMLModal from "../components/XML-modal";

class BalanceTool extends Component {
  handleMinusClick = event => {
    this.props.actions.minusClick(event.target.getAttribute('row'));
  };

  handlePlusClick = event => {
    this.props.actions.plusClick();
  };

  handleSelectChange = event => {
    this.props.actions.selectChange(
      event.target.value,
      event.target.getAttribute('row'),
    );
  }; 

  handleInputChange = event => {
    this.props.actions.inputChange(
      event.target.value,
      event.target.name,
      event.target.getAttribute('row')
    );
  };

  handleSubmit = event => {
    this.props.actions.getXML();
  };

  render() {
    return (
      <div className="page-inner">
        <div className="page-title">
          <h3 className="breadcrumb-header">Balanza de Comprobación</h3>
        </div>
        <div id="main-wrapper">
          <div className="row">
            <Accounts 
              // General
              title="Listado de Cuentas"
              // Handlers
              handleMinusClick={this.handleMinusClick}
              handlePlusClick={this.handlePlusClick}
              handleSelectChange={this.handleSelectChange}
              handleInputChange={this.handleInputChange}
              // State
              registros={this.props.rows}  
              isBalanced={this.props.isBalanced}
              debtTotal={this.props.debtTotal}
              creditTotal={this.props.creditTotal}
              accountsList={this.props.accountsList}
            />
          </div>
        </div>
        <SubmitBalance 
          isBalanced={this.props.isBalanced}
          handleSubmit={this.handleSubmit}
        />
        <XMLModal 
          XML_file={this.props.XML_file}
          isAny={this.props.isAny}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    rows: state.rows,
    isBalanced: state.isBalanced,
    XML_file: state.XML_file,
    debtTotal: state.debtTotal,
    creditTotal: state.creditTotal,
    accountsList: state.accountsList,
    isAny: state.isAny    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BalanceTool);
