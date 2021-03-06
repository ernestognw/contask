import {
  DELETE_ROW,
  ADD_ROW,
  SELECT_CHANGE,
  INPUT_CHANGE,
  CHECK_EMPTY,
  UPLOAD_XML_FILE
} from "../actions/action-types";

import { firestoreRef } from '../config/firebase';
import initialState from './initial-state';

function balance(state = initialState, action) {
  switch (action.type) {
    case DELETE_ROW:
      state.rows.splice(action.payload.row, 1);
      updateCreditTotal(state);
      updateDebtTotal(state);
      updateAvailableAccounts(state);
      return {
        ...state,
        rows: [...state.rows]
      };

    case ADD_ROW:
      state.rows.push(action.payload.newRow);
      return {
        ...state,
        rows: [...state.rows]
      };

    case SELECT_CHANGE:
      state.rows[action.payload.id].account = action.payload.value;

      updateCreditTotal(
        state,
        action.payload.value === "" ? true : false,
        action.payload.id
      );
      updateDebtTotal(
        state,
        action.payload.value === "" ? true : false,
        action.payload.id
      );
      updateAvailableAccounts(state);

      return {
        ...state,
        rows: [...state.rows],
        accountsList: [...state.accountsList]
      };

    case INPUT_CHANGE:
      if (action.payload.id) {
        let row = state.rows[action.payload.id];

        if (action.payload.name === "initial") {
          action.payload.value === ""
            ? (row.initial = "")
            : (row.initial = Number(action.payload.value));
        }

        if (action.payload.name === "debt") {
          action.payload.value === ""
            ? (row.debt = "")
            : (row.debt = Number(action.payload.value));
          updateDebtTotal(state);
        }

        if (action.payload.name === "credit") {
          action.payload.value === ""
            ? (row.credit = "")
            : (row.credit = Number(action.payload.value));
          updateCreditTotal(state);
        }

        row.final = row.initial + row.debt - row.credit;
        if (row.final === 0) row.final = "00.00";

        state.rows[action.payload.id] = row;

        return {
          ...state,
          rows: [...state.rows],
          debtTotal: [state.debtTotal],
          creditTotal: [state.creditTotal],
          isBalanced: state.isBalanced
        };
      } else {
        if (action.payload.name === "RFC") {
          state.RFC = action.payload.value;
        }
        if (action.payload.name === "year") {
          state.year = action.payload.value;
        }
        if (action.payload.name === "month") {
          state.month = action.payload.value;
        }
        if (action.payload.name === "typeofsending") {
          state.typeOfSending = action.payload.value;
        }

        if (state.typeOfSending === 'C') {
          state.isComplementary = true;
        } else {
          state.isComplementary = false;
        }

        if (state.RFC !== "" && state.year !== "" && state.month !== "" && state.typeOfSending !== "") {
          state.filename = state.RFC + state.year + state.month + "B" + state.typeOfSending + ".xml";
          state.filename.toString();
          state.validDownload = true;

        } else {
          state.filename = "";
          state.validDownload = false;
        }

        return {
          ...state,
          RFC: state.RFC,
          year: state.year,
          month: state.month,
          typeOfSending: state.typeOfSending,
          filename: state.filename,
          validDownload: state.validDownload,
          isAny: state.isAny,
          href: state.href,
          isComplementary: state.isComplementary,
        };
      }

    case CHECK_EMPTY:
      state.isAny = false;
      state.rows.map(row => {
        if (row.account !== "") {
          state.isAny = true;
        }
        return true; // This doesn't do anything
      });
      return {
        ...state,
        isAny: state.isAny,
      };
    
    case UPLOAD_XML_FILE:
      console.log(state)
      let XMLString = generateXMLString(state);
      let blob = new Blob([XMLString], { type: "text/plain" });
      state.href = window.URL.createObjectURL(blob);

      firestoreRef.child(`BalanzasComprobación/${action.payload.uid}/${state.filename}`).put(blob).then(function(snapshot) {
        console.log('Uploaded a blob or file!', snapshot);
      });

      return {
        ...state
      }

    default:
      return state;
  }
}

export default balance;

// Functions
function updateDebtTotal(state, hasDiscount, discountId) {
  state.debtTotal = 0;
  for (let i = 0; i < state.rows.length; i++) {
    state.debtTotal += Number(state.rows[i].debt);
  }

  if (hasDiscount) {
    state.debtTotal -= state.rows[discountId].debt;
  }

  if (state.debtTotal === 0) state.debtTotal = "";
  Number(state.creditTotal) === Number(state.debtTotal)
    ? (state.isBalanced = true)
    : (state.isBalanced = false);
}

function updateCreditTotal(state, hasDiscount, discountId) {
  state.creditTotal = 0;
  for (let i = 0; i < state.rows.length; i++) {
    state.creditTotal += Number(state.rows[i].credit);
  }

  if (hasDiscount) {
    state.creditTotal -= state.rows[discountId].credit;
  }

  if (state.creditTotal === 0) state.creditTotal = "";
  Number(state.creditTotal) === Number(state.debtTotal)
    ? (state.isBalanced = true)
    : (state.isBalanced = false);
}

function updateAvailableAccounts(state) {
  for (let listItem = 0; listItem < state.accountsList.length; listItem++) {
    for (let row = 0; row < state.rows.length; row++) {
      if (state.accountsList[listItem].value === state.rows[row].account) {
        state.accountsList[listItem].selected = true;
        break;
      } else {
        state.accountsList[listItem].selected = false;
      }
    }
  }
}

function generateXMLString(state) {
  let XMLString = `<?xml version="1.0" encoding="utf-8"?>
<BCE:Balanza xsi:schemaLocation="http://www.sat.gob.mx/esquemas/ContabilidadE/1_3/BalanzaComprobacion http://www.sat.gob.mx/esquemas/ContabilidadE/1_3/BalanzaComprobacion/BalanzaComprobacion_1_3.xsd" Version="1.3" RFC="${state.RFC}" Mes="${state.month}" Anio="${state.year}" TipoEnvio="${state.typeOfSending}" xmlns:BCE="http://www.sat.gob.mx/esquemas/ContabilidadE/1_3/BalanzaComprobacion" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
`;

  state.rows.map(row => {
    if (row.account !== "") {
      XMLString += `<BCE:Ctas NumCta="${row.account.toString()}" SaldoIni="${row.initial.toString()}" Debe="${row.debt.toString()}" Haber="${row.credit.toString()}" SaldoFin="${row.final.toString()}" />
`;
    }
    return true;
  });

  XMLString += "</BCE:Balanza>";

  return XMLString;
}
