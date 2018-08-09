import React from "react";

function XMLModal(props) {
  return (
    <div
      className="modal fade in"
      id="XMLOutput"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myLargeModalLabel">
              Copia y pega esto en un Bloc de Notas
            </h4>
          </div>
          <div className="modal-body">
            {
              props.isAny ? 
              <textarea readOnly className="form-control" rows="15" value={props.XML_file} />
              :
              <div className="alert alert-danger text-center" role="alert"><i className="fa fa-times"></i><p>Primero debes ingresar algún registro</p></div>
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XMLModal;