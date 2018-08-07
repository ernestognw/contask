import React from "react";
import "./minus.css";

function Minus(props) {
  return (
    <button
      className="btn btn-danger"
      row={props.id}
      onClick={props.handleMinusClick}
    >
      <i
        row={props.id}
        className="fa fa-times"
      />
    </button>
  );
}

export default Minus;
