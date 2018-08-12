import React from 'react';
import Minus from './minus';
import MoneyInput from './money-input';
import AccountList from './account-list';

function ToolRow (props) {
  return (
    <div className="row">
      <div className="col-md-3">
       <AccountList                   
        id={props.id}
        accountsList={props.accountsList}
        value={props.value}
        handleSelectChange={props.handleSelectChange}       
       />
      </div>
      <div className="col-md-2">
        <MoneyInput 
          prefix="Inicial"    
          disabled={props.value === '' ? true : false}                              
          handleInputChange={props.handleInputChange}
          id={props.id}
          column="initial"
          quantity={props.value === '' ? '' : props.initial}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput   
          prefix="Deber"                        
          disabled={props.value === '' ? true : false}                       
          handleInputChange={props.handleInputChange}
          column="debt"          
          id={props.id}
          quantity={props.value === '' ? '' : props.debt}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput  
          prefix="Haber"                                
          disabled={props.value === '' ? true : false}            
          handleInputChange={props.handleInputChange}
          column="credit"          
          id={props.id}
          quantity={props.value === '' ? '' : props.credit}
        />
      </div>
      <div className="col-md-2">
        <MoneyInput
          prefix="Final"                                        
          disabled                
          column="final"          
          id={props.id}
          quantity={props.value === '' ? '' : props.final}
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

export default ToolRow;