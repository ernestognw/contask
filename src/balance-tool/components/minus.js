import React from "react";
import "./minus.css";

function Minus(props) {
  return (
    <button
      className="btn btn-danger btn-rounded"
      title={props.name}
      data-id={props.id}
      onClick={props.handleMinusClick}
    >
      <i
        title={props.name}
        data-id={props.id}
        title={props.name}
        className="fa fa-times"
      />
    </button>
  );
}

export default Minus;
