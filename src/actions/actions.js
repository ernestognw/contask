import { 
  DELETE_ROW,
  ADD_ROW,
  SELECT_CHANGE,
  INPUT_CHANGE,
  CHECK_EMPTY,
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
      newRow: {
        account: '',
        initial: '',
        debt: '',
        credit: '',
        final: '0.00',
      }
    }
  }
}

export function selectChange(value, id) {
  return {
    type: SELECT_CHANGE,
    payload: {
      value,
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

export function checkEmpty() {
  return {
    type: CHECK_EMPTY,
  }
}