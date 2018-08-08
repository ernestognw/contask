import React from "react";
import './account-list.css';

function AccountList(props) {
  return (
    <div className="form-group">
      <div className="input-group">
        <span className={!props.active ? 'input-group-addon deletable' : 'input-group-addon deletable input-group-focus'}>Cuenta</span>            
        <select value={props.value} row={props.id} onChange={props.handleSelectChange} className="form-control">
          <option value="" defaultValue>Elegir cuenta aquí...</option>
          { props.accountsList.map((item, index) => {
            return(
              <option disabled={item.selected} key={index} value={item.value}>{`${item.name} (${item.value})`}</option>
            )
            })
          }
        </select>
      </div>
    </div>
  );
}

export default AccountList;
