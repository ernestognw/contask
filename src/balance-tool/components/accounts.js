import React from "react";
import "./accounts.css";
import Registro from "./registro";
import Plus from "./plus";
import MoneyInput from "./money-input";
// import MoneyTotal from "./money-total";

function Accounts(props) {
  return (
    <div className="col-md-12">
      <div className="panel panel-white">
        <div className="panel-heading clearfix">
          <h4>{props.title}</h4>
        </div>
        <div className="panel-body">
          {props.registros.map((item, index) => {
            return (
              <Registro
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
                disabled
                column="debtors"
                quantity={props.debtTotal}
              />
            </div>
            <div className="col-md-2">
              <MoneyInput
                disabled
                column="creditors"
                quantity={props.creditTotal}
               />
            </div>
            <div className="col-md-2">
              { props.isBalanced ?
                <div className="alert alert-success" role="alert">
                  <i className="fa fa-check"></i>
                  <p>Balanceado</p>                
                </div>
                :
                <div className="alert alert-danger" role="alert">
                  <i className="fa fa-times"></i>
                  <p>Error</p>                
                </div>
              }
            </div>
            <div className="col-md-1"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
