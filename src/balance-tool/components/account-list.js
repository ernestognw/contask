import React from "react";

function AccountList(props) {
  return (
    <div className="form-group">
      <select value={props.value} row={props.id} onChange={props.handleSelectChange} className="form-control">
        <option value="110100000">Caja</option>
        <option value="110200000">Bancos</option>
        <option value="110300000">Inversiones</option>
        <option value="110705000">Otros Instrumentos Financieros</option>
        <option value="110702000">Clientes</option>
        <option value="110703000">Otros documentos por cobrar a corto plazo</option>
        <option value="110704000">Deudores Diversos</option>
        <option value="110701000">Estimación de Cuentas Incobrables</option>
        <option value="110500000">Pagos anticipados</option>
      </select>
    </div>
  );
}

export default AccountList;
