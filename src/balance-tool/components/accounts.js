import React from "react";
import "./cuentas.css";
import Registro from "./registro";
import Plus from "./plus";
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
            return(
              <Registro 
                value={item.account}
                initial={item.initial} //done
                debt={item.debt} //done
                credit={item.credit} //done
                final={item.final} //done       
                key={index} //done
                id={index} //done
                name={props.name} //done
                handleMinusClick={props.handleMinusClick} //done
                handleSelectChange={props.handleSelectChange}
                handleInputChange={props.handleInputChange} //done
              />
            );
          })}
          <div className="text-center">
            <div className="col-md-5">
              <Plus 
                handlePlusClick={props.handlePlusClick} 
                name={props.name}
              />
            </div>
            <div className="col-md-2">comprob</div>
            <div className="col-md-2">comprob</div>
            <div className="col-md-2"></div>  
            <div className="col-md-1"></div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
