import React from 'react';
import './plus.css';

function Plus (props) {
  return(
    <button 
      className="btn btn-success"
      onClick={props.handlePlusClick}      
    >
      <i className="fa fa-plus"></i>
    </button>
  )
}

export default Plus;