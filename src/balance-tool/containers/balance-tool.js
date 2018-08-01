import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actions";
import { bindActionCreators } from "redux";
import Accounts from "../components/accounts";

class BalanceTool extends Component {
  handleMinusClick = event => {
    this.props.actions.minusClick(event.target);
  };

  handlePlusClick = event => {
    this.props.actions.plusClick(event.target.title);
  };

  handleSelectChange = event => {
    this.props.actions.selectChange(
      event.target.value,
      event.target.name,
      event.target.title
    );
  };

  handleInputChange = event => {
    this.props.actions.inputChange(
      event.target.value,
      event.target.name,
      event.target.title
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
              name="debtors" // done
              title="Listado de Cuentas" //done
              // Functions
              handleMinusClick={this.handleMinusClick} //done
              handlePlusClick={this.handlePlusClick} // done
              handleSelectChange={this.handleSelectChange} //done
              handleInputChange={this.handleInputChange} //done
              // State
              registros={this.props.rows} //done            
              totalMoney={this.props.debtorsTotal}
              isBalanced={this.props.isBalanced}
            />
            {/* <div className="col-md-12 text-center">
              <button
                className="btn btn-success btn-lg"
                onClick={this.handleSubmit}
              >
                <b>Obtener XML</b>
              </button>
            </div>
            <div className="col-md-12">
              <textarea
                className="form-control"
                rows="15"
                value={this.props.XML_file}
              />
            </div> */}
          </div>
        </div>
      </div>
          
    );
  }
}

function mapStateToProps(state, props) {
  return {
    rows: state.rows,
    debtorsTotal: state.debtorsTotal,
    creditorsTotal: state.creditorsTotal,
    isBalanced: state.isBalanced,
    XML_file: state.XML_file
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
