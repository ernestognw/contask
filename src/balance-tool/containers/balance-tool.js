import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actions";
import { bindActionCreators } from "redux";
import Accounts from "../components/accounts";

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
              title="Listado de Cuentas" //done
              // Functions
              handleMinusClick={this.handleMinusClick} //done
              handlePlusClick={this.handlePlusClick} // done
              handleSelectChange={this.handleSelectChange} //done
              handleInputChange={this.handleInputChange} //done
              // State
              registros={this.props.rows} //done  

              isBalanced={this.props.isBalanced}
              debtTotal={this.props.debtTotal}
              creditTotal={this.props.creditTotal}
            />
          </div>
        </div>
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
