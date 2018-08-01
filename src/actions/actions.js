import { 
  DELETE_ROW,
  ADD_ROW,
  SELECT_CHANGE,
  INPUT_CHANGE,
  GET_XML,
 } 
from "./action-types";

export function minusClick(row) {
  return {
    type: DELETE_ROW,
    payload: {
      row
    }
  }
}

export function plusClick(account) {
  return {
    type: ADD_ROW,
    payload: {
      account,
      newRow: {
        account: "Bancos",
        quantity: ""
      }
    }
  }
}

export function selectChange(value, name, id) {
  return {
    type: SELECT_CHANGE,
    payload: {
      value,
      name,
      id
    }
  }
}

export function inputChange(value, name, id) {
  return {
    type: INPUT_CHANGE,
    payload: {
      value,
      name,
      id
    }
  }
}

export function getXML() {
  return {
    type: GET_XML,
  }
}