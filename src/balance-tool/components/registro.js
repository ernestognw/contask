import React from 'react';
import Minus from './minus';
import MoneyInput from './money-input';
import AccountList from './account-list';

function Registro (props) {
  return (
    <div className="row">
      <div className="col-md-3">
       <AccountList
        id={props.id}
        value={props.value}
        handleSelectChange={props.handleSelectChange}
       />
      </div>
      <div className="col-md-2">
        <MoneyInput             
          handleInputChange={props.handleInputChange}
          id={props.id}
          column="initial"
          quantity={props.initial}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput              
          handleInputChange={props.handleInputChange}
          column="debt"          
          id={props.id}
          quantity={props.debt}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput              
          handleInputChange={props.handleInputChange}
          column="credit"          
          id={props.id}
          quantity={props.credit}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput
          disabled                
          column="final"          
          id={props.id}
          quantity={props.final}
        />
      </div>
      <div className="col-md-1 text-center">
        <Minus 
          handleMinusClick={props.handleMinusClick}
          id={props.id}
        />
      </div>
      <hr/>
    </div>
  )
}

export default Registro;