import React from "react";
import "./accounts.css";
import ToolRow from "./tool-row";
import Plus from "./plus";
import MoneyInput from "./money-input";
import InputDescriptions from "./input-descriptions";
import SubmitBalance from "./submit-balance";
// import MoneyTotal from "./money-total";

function Accounts(props) {
  return (
    <div className="col-md-12">
      <div className="panel panel-white">
        <div className="panel-heading clearfix">
          <h4>{props.title}</h4>
        </div>
        <div className="panel-body">
          <InputDescriptions />        
          {props.registros.map((item, index) => {
            return (
              <ToolRow
                value={item.account} //done
                initial={item.initial} //done
                debt={item.debt} //done
                credit={item.credit} //done
                final={item.final} //done
                key={index} //done
                id={index} //done         
                handleMinusClick={props.handleMinusClick} //done
                handleSelectChange={props.handleSelectChange} // done
                handleInputChange={props.handleInputChange} //done
                accountsList={props.accountsList}
              />
            );
          })}
          <div className="row text-center">
            <div className="col-md-5">
              <Plus handlePlusClick={props.handlePlusClick} />
            </div>
            <div className="col-md-2">
              <MoneyInput 
                prefix="Total"
                disabled
                column="debtors"
                quantity={props.debtTotal}
              />
            </div>
            <div className="col-md-2">
              <MoneyInput
                prefix="Total"              
                disabled
                column="creditors"
                quantity={props.creditTotal}
               />
            </div>
            <div className="col-md-2">
              { props.isBalanced ?
                <div className="alert alert-balance alert-success notification-adjusted" role="alert">
                  <i className="fa fa-check"></i>
                  <p>Balanceado</p>                
                </div>
                :
                <div className="alert alert-balance alert-danger notification-adjusted" role="alert">
                  <i className="fa fa-times"></i>
                  <p>Error</p>                
                </div>
              }
            </div>
            <div className="col-md-1"/>
          </div>
          <SubmitBalance 
            isBalanced={props.isBalanced}
            handleSubmit={props.handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Accounts;
