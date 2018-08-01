import React from 'react';
import './plus.css';

function Plus (props) {
  return(
    <button 
      className="btn btn-success btn-rounded"
      onClick={props.handlePlusClick}      
      title={props.name}
    >
      <i title={props.name} className="fa fa-plus"></i>
    </button>
  )
}

export default Plus;