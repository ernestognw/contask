import React from "react";
import "./submit-balance.css";

function SubmitBalance(props) {
  return (
    <div className="text-center">
      <button
        disabled={!props.isBalanced}
        href="#"
        className={props.isBalanced ? "btn lg btn-primary" : "btn lg btn-danger"}
        data-toggle="modal"
        data-target="#XMLOutput"
        onClick={props.handleSubmit}
      >
        Obtener XML
      </button>
    </div>
  );
}

export default SubmitBalance;
