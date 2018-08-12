import React from "react";
import './XML-modal.css';

let years = [];
let months = [];

for (let i = 2018; i <= 2099; i++) {
  years.push(i.toString())
}

for (let i = 1; i <= 13; i++) {
  months.push(('0'+i.toString()).slice(-2))
}

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
              Rellena primero estos datos para poder descargar tu XML
            </h4>
          </div>
          <div className="modal-body">
            {
              props.isAny ? 
              <div className="panel panel-corrected panel-white">
                  <div className="panel-body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="col-sm-3 control-label">RFC</label>
                        <div className="col-sm-9">
                          <input onChange={props.handleInputChange} name="RFC" className="form-control" placeholder="RFC" minLength="12" maxLength="13"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label">Mes</label>
                        <div className="col-sm-9">
                          <select onChange={props.handleInputChange} name="month"  className="form-control" placeholder="Mes">
                            <option defaultValue value="">Selecciona el periodo</option>
                            {
                              months.map(event => {
                                return (
                                  <option key={event} value={event}>{event}</option>
                                )
                              })
                            }                            
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label">Año</label>
                        <div className="col-sm-9">
                          <select onChange={props.handleInputChange} name="year"  className="form-control" placeholder="Año">
                            <option defaultValue value="">Selecciona el año</option>
                            {
                              years.map(event => {
                                return (
                                  <option key={event} value={event}>{event}</option>
                                )
                              })
                            }                          
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label">Tipo de Envío</label>
                        <div className="col-sm-9">
                          <select onChange={props.handleInputChange} name="typeofsending" className="form-control" placeholder="Tipo">
                            <option defaultValue value="">Selecciona el tipo</option>
                            <option value="N">Normal</option> 
                            <option value="C">Complementaria</option>                        
                          </select>
                        </div>
                      </div>
                      {
                        props.isComplementary ?
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Fecha de Modificación</label>
                          <div className="col-sm-9">
                          <input name="modificationDate" className="form-control" placeholder="Fecha" minLength="12" maxLength="13"/>
                          </div>
                        </div> :
                        <div></div>
                      }
                      
                    </form>
                  </div>
              </div>
              :
              <div className="alert alert-danger text-center" role="alert"><i className="fa fa-times"></i><p>Primero debes ingresar algún registro</p></div>
            }
          </div>
            {
              props.isAny ?
              <div className="modal-footer"> 
                <a disabled={!props.validDownload} type="button" className="btn btn-primary" href={props.href} download={props.filename}>
                  Descargar
                </a>
                <button type="button" className="btn btn-warning" data-dismiss="modal">
                  Cerrar
                </button>
              </div>
              :
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal">
                  Cerrar
                </button>
              </div>
            }
        </div>
      </div>
    </div>
  );
}

export default XMLModal;