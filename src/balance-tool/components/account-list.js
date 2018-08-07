import React from "react";

function AccountList(props) {
  return (
    <div className="form-group">
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
  );
}

export default AccountList;
