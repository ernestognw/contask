import React from "react";
import "./money-input.css"

function MoneyInput (props) {
  return (
    <div className="form-group" onFocus={props.handleFocus} onBlur={props.handleBlur}>
      <div className="input-group">
        <span className={!props.active ? 'input-group-addon' : 'input-group-addon input-group-focus'}>$</span>
        <input
          disabled={props.disabled}
          type="number"
          className="form-control"
          placeholder="00.00"
          value={props.quantity}   
          onChange={props.handleInputChange}
          name={props.column}
          row={props.id}       
        />
      </div>
    </div>
  );
}

export default MoneyInput;
