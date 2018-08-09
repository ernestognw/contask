import { DELETE_ROW, ADD_ROW, SELECT_CHANGE, INPUT_CHANGE, GET_XML } from '../actions/action-types';

function accounts (state = [], action) {
  switch (action.type) {
    case DELETE_ROW:     
      state.rows.splice(action.payload.row, 1)
      updateCreditTotal(state);
      updateDebtTotal(state);
      updateAvailableAccounts(state);
      return{
        ...state,
        rows: [...state.rows]
      }

    case ADD_ROW: 
      state.rows.push(action.payload.newRow);
      return {
        ...state,
        rows: [...state.rows]
      }

    case SELECT_CHANGE:
      state.rows[action.payload.id].account = action.payload.value;

      updateCreditTotal(state, action.payload.value === '' ? true : false, action.payload.id);
      updateDebtTotal(state, action.payload.value === '' ? true : false, action.payload.id);
      updateAvailableAccounts(state);

      return {
        ...state,
        rows: [...state.rows],
        accountsList: [...state.accountsList],
      }


    case INPUT_CHANGE:
      let row = state.rows[action.payload.id];

      if (action.payload.name === 'initial') {
        action.payload.value === '' ? row.initial = '' : row.initial = Number(action.payload.value);
      } 

      if (action.payload.name === 'debt') {
        action.payload.value === '' ? row.debt = '' : row.debt = Number(action.payload.value);
        updateDebtTotal(state);
      } 

      if (action.payload.name === 'credit') {
        action.payload.value === '' ? row.credit = '' : row.credit = Number(action.payload.value);
        updateCreditTotal(state);
      }

      row.final = row.initial + row.debt - row.credit;
      if (row.final === 0) row.final = '00.00';

      state.rows[action.payload.id] = row;

      return {
        ...state,
        rows: [...state.rows],
        debtTotal: [state.debtTotal],
        creditTotal: [state.creditTotal],
        isBalanced: state.isBalanced,
      }

    case GET_XML:
      let XMLString='';
      let isAny = false;

      state.rows.map(row => {
        if (row.account !== '') {
          XMLString += `<BCE:Ctas NumCta="${row.account.toString()}" SaldoIni="${row.initial.toString()}" Debe="${row.debt.toString()}" Haber="${row.credit.toString()}" SaldoFin="${row.final.toString()}" />`;
          isAny = true;
        }
        return true;
      })

      XMLString+='</BCE:Balanza>'
      
      return {
        ...state,
        XML_file: XMLString,
        isAny: isAny,
      }

    default: 
      return state;
    }
}

export default accounts;


// Functions
function updateDebtTotal(state, hasDiscount, discountId) {
  state.debtTotal = 0;
  for (let i = 0; i < state.rows.length; i++){
    state.debtTotal += Number(state.rows[i].debt)
  }

  if (hasDiscount){
    state.debtTotal -= state.rows[discountId].debt;
  }

  if (state.debtTotal === 0) state.debtTotal = '';
  Number(state.creditTotal) === Number(state.debtTotal) ? state.isBalanced = true : state.isBalanced = false;  
}

function updateCreditTotal(state, hasDiscount, discountId) {
  state.creditTotal = 0;
  for (let i = 0; i < state.rows.length; i++){
    state.creditTotal += Number(state.rows[i].credit)
  }

  if (hasDiscount){
    state.creditTotal -= state.rows[discountId].credit;
  }

  if (state.creditTotal === 0) state.creditTotal = '';
  Number(state.creditTotal) === Number(state.debtTotal) ? state.isBalanced = true : state.isBalanced = false;  
}

function updateAvailableAccounts(state){
  for(let listItem = 0; listItem < state.accountsList.length; listItem++) {
    for (let row = 0; row < state.rows.length; row++){
      if (state.accountsList[listItem].value === state.rows[row].account) {
        state.accountsList[listItem].selected = true;
        break;
      } else {
        state.accountsList[listItem].selected = false;
      }
    }
  }
}