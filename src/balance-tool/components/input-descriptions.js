import React from 'react';
import './input-descriptions.css';

function InputDescriptions (props) {
  return(
    <div className="descriptions">
      <div className="row">
        <div className="col-md-3">
          <h5>Cuentas</h5>
          <hr/>
        </div>
        <div className="col-md-2">
          <h5>Inicial</h5>
          <hr/>      
        </div>
        <div className="col-md-2">
          <h5>Deber</h5>
          <hr/>      
        </div>
        <div className="col-md-2">
          <h5>Haber</h5>
          <hr/>      
        </div>
        <div className="col-md-2">
          <h5>Final</h5>
          <hr/>      
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  )
}

export default InputDescriptions;