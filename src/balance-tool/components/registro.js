import React from 'react';
import Minus from './minus';
import MoneyInput from './money-input';
import AccountList from './account-list';

function Registro (props) {
  return (
    <div className="row">
      <div className="col-md-3">
       <AccountList />
      </div>
      <div className="col-md-2">
        <MoneyInput
          isBalanced                
          handleInputChange={props.handleInputChange}
          name={props.name}
          id={props.id}
          quantity={props.initial}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput
          isBalanced                
          handleInputChange={props.handleInputChange}
          name={props.name}
          id={props.id}
          quantity={props.debt}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput
          isBalanced                
          handleInputChange={props.handleInputChange}
          name={props.name}
          id={props.id}
          quantity={props.credit}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput
          isBalanced
          disabled                
          handleInputChange={props.handleInputChange}
          name={props.name}
          id={props.id}
          quantity={props.final}
        />
      </div>
      <div className="col-md-1 text-center">
        <Minus 
          handleMinusClick={props.handleMinusClick}
          id={props.id}
          name={props.name}
        />
      </div>
      <hr/>
    </div>
  )
}

export default Registro;