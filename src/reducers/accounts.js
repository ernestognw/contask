import { DELETE_ROW, ADD_ROW, SELECT_CHANGE, INPUT_CHANGE, GET_XML } from '../actions/action-types';

function accounts (state = [], action) {
  switch (action.type) {
    case DELETE_ROW:     
      state.rows.splice(action.payload.row, 1)
      updateCreditTotal(state);
      updateDebtTotal(state);
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
      return {
        ...state,
        rows: [...state.rows]
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
      if (row.final === 0) row.final = '0.00';

      state.rows[action.payload.id] = row;

      return {
        ...state,
        rows: [...state.rows],
        debtTotal: [state.debtTotal],
        creditTotal: [state.creditTotal],
        isBalanced: state.isBalanced
      }

    case GET_XML:
      let final_list = [];
      let accounts_list = [];
      let XML_string = '';
      let final_XML = '';

      state.debtors.map(account => {
        if (accounts_list.indexOf(account.account) === -1){
          accounts_list.push(account.account)
        } 
      return true; // This doesn't do anything
      })      
      state.creditors.map(account => {
        if (accounts_list.indexOf(account.account) === -1){
          accounts_list.push(account.account)
        } 
      return true; // This doesn't do anything
      })

      accounts_list.map(account => {
        let creditorsArray = state.creditors.filter(name => name.account === account)
        let debtorsArray = state.debtors.filter(name => name.account === account)

        let debtorsSum = 0;
        let creditorsSum = 0;     

        debtorsArray.map(row => {
          debtorsSum += Number(row.quantity)
          return true; // This doesn't do anything          
        });
        creditorsArray.map(row => {
          creditorsSum += Number(row.quantity)
          return true; // This doesn't do anything          
        });        

        final_list.push({
          account: account,
          debt: debtorsSum,
          credit: creditorsSum,
        })

        console.log(final_list)
        return true; // This doesn't do anything   
      });
      console.log(accounts_list);

      final_list.map(row => {
        XML_string += `<BCE:Ctas NumCta="${row.account.toString()}" SaldoIni="0.00" Debe="${row.debt.toString()}" Haber="${row.credit.toString()}" SaldoFin="0.00" />
        `
        return true; // This doesn't do anything
      })

      console.log(XML_string);

      final_XML = `<?xml version="1.0" encoding="utf-8"?>
      <BCE:Balanza xsi:schemaLocation="http://www.sat.gob.mx/esquemas/ContabilidadE/1_3/BalanzaComprobacion http://www.sat.gob.mx/esquemas/ContabilidadE/1_3/BalanzaComprobacion/BalanzaComprobacion_1_3.xsd" Version="1.3" RFC="ETA450920HD2" Mes="11" Anio="2017" TipoEnvio="N" Sello="Q7XJkZTzU4eO0tCmZ8wqwKjib1b8arX00qll8G56wsZQ8p06dDWP/7oyix9twB91od3VH/Mp+bU3NroYtf+R33Ey6r1JcRa6T2CC9a0WA/QK+ss+FvPVNdCzVbJKeLS7dSebQjPSVuzdo4MYkkFQb2oSY0EfnqlSfGjTO8Bw3tH31NQ2CrhxVpIK3yuwCruMiXv0vr7HQ1gGyoLQU6a38Iok4Ax6u3bFsAO92+s2GZ1Tbn0oavN+aVaF3YNmMRW6sMoi36OBH8jlPczM1WItNsybSbcMLTISiraYLyivQCQIbHjOHbX+Mck567U3WnaKwxL3XEsq0dBE+SwMmxEgpQ==" noCertificado="00001000000407669758" Certificado="MIIGVDCCBDygAwIBAgIUMDAwMDEwMDAwMDA0MDc2Njk3NTgwDQYJKoZIhvcNAQELBQAwggGyMTgw&#xA;NgYDVQQDDC9BLkMuIGRlbCBTZXJ2aWNpbyBkZSBBZG1pbmlzdHJhY2nDs24gVHJpYnV0YXJpYTEv&#xA;MC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsM&#xA;L0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMR8wHQYJKoZI&#xA;hvcNAQkBFhBhY29kc0BzYXQuZ29iLm14MSYwJAYDVQQJDB1Bdi4gSGlkYWxnbyA3NywgQ29sLiBH&#xA;dWVycmVybzEOMAwGA1UEEQwFMDYzMDAxCzAJBgNVBAYTAk1YMRkwFwYDVQQIDBBEaXN0cml0byBG&#xA;ZWRlcmFsMRQwEgYDVQQHDAtDdWF1aHTDqW1vYzEVMBMGA1UELRMMU0FUOTcwNzAxTk4zMV0wWwYJ&#xA;KoZIhvcNAQkCDE5SZXNwb25zYWJsZTogQWRtaW5pc3RyYWNpw7NuIENlbnRyYWwgZGUgU2Vydmlj&#xA;aW9zIFRyaWJ1dGFyaW9zIGFsIENvbnRyaWJ1eWVudGUwHhcNMTcwOTI5MjI0MDQ3WhcNMjEwOTI5&#xA;MjI0MDQ3WjCB9DEyMDAGA1UEAxMpQVJBQ09OIElOR0VOSUVSSUEgWSBDT05TVFJVQ0NJT04gU0Eg&#xA;REUgQ1YxMjAwBgNVBCkTKUFSQUNPTiBJTkdFTklFUklBIFkgQ09OU1RSVUNDSU9OIFNBIERFIENW&#xA;MTIwMAYDVQQKEylBUkFDT04gSU5HRU5JRVJJQSBZIENPTlNUUlVDQ0lPTiBTQSBERSBDVjElMCMG&#xA;A1UELRMcQUlDMTcwMzI0VTQ0IC8gTlVNQTg1MTIyNkNNNzEeMBwGA1UEBRMVIC8gTlVNQTg1MTIy&#xA;Nk1ER1hSTDA0MQ8wDQYDVQQLEwZtYXRyaXowggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB&#xA;AQCLTik/l5KssLvzAvM5C83ZaQ6DoQA6ws0XI1oHPJWw4ipI3Fx+anpGv+174mwnulyM/3osG01q&#xA;h4AL6T9+2N/zO3R0qy510CW5vmslM3O++emY7BLDEooDQchBy4oZ83qhcyHB8S+YdKKaBxFZLP6o&#xA;qvytaS0NOoHNj3w/hDy8FaXTovW67/YrDuCxR4/PQHm9OcWBkRubhwbxha9u7enOXSuloec0VvF0&#xA;dGQ/hJTOFFzOdM80z8Ameu6T0PHHqZtFg6naQEXT1vOX5xrs7mGc6CFFmWuqjs0OtWBv4iX8Og9f&#xA;W/EWlSSUAs7kStI6KrzAAWAbpcFMhh5I0KyUtzRDAgMBAAGjHTAbMAwGA1UdEwEB/wQCMAAwCwYD&#xA;VR0PBAQDAgbAMA0GCSqGSIb3DQEBCwUAA4ICAQCvvN0ZkYotpz8WhdT+LsPRfWjwqGPyRSjq8nLx&#xA;00xfooXlofDrF3+Itoe2hRZ4+PveYV8JSakKutObUhG36MQ4iV3TlC2ZcyQLBMxOrCN8LvHXmppV&#xA;UwcOWm7NhMbyE9ymZW3SFijdnpwgoFo5itEk+dnJg6snCNGle98lv3aD34OBh4fcoEtOzXxGDuvo&#xA;YDZSHzmJVcW+Ec8SZ19xUozHQI+IIOnaNRe3pWikiWHVlNA3JeyAw0lr/AuErXiWp0c/nwdcu+2J&#xA;mbsP6cVn/9THp6p2O0xUbZgKkN3bDGQF+mgu1d9LVhMKXgMmMdR191hFviPUEHiQPoBbdMANscQe&#xA;JQgn8o4n9o0kRVbKUUBLyGcBxBhd93mWZKBJuSttl2fIy7R4RrUFiOhuPnrsQlMS7J/K0CRfvbIH&#xA;8RIrHKLThGWQWAMIEWiXbgwo43XYLscxsu35mHv1d2Tup2qED2sxc350Tx8l2XuoXe+1c6cd+0AK&#xA;SSsmhFnyWzLWFhjwUBDcxn2WOE8smlwi/AURtS4pGZ32r6PbhHAf+8AuvdG4BO9FY4mjZ83L2AEH&#xA;N6J1ZU8WY7Tyfcr1IGWePSXy8YGuZ91CAlnU6jFHOnUPpdSm4WWDK3BlvPt+sLVddo/7SdShKsAm&#xA;VtH77PvGRbirKUZfHL5pvvlAvXd/0IE/ag/sjQ==" xmlns:BCE="http://www.sat.gob.mx/esquemas/ContabilidadE/1_3/BalanzaComprobacion" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      ${XML_string}</BCE:Balanza>`    
      return {
        ...state,
        XML_file: final_XML    
      }

    default: 
      return state;
    }
}

function updateDebtTotal(state) {
  state.debtTotal = 0;
  for (let i = 0; i < state.rows.length; i++){
    state.debtTotal += Number(state.rows[i].debt)
  }
  if (state.debtTotal === 0) state.debtTotal = '';
  Number(state.creditTotal) === Number(state.debtTotal) ? state.isBalanced = true : state.isBalanced = false;  
}

function updateCreditTotal(state) {
  state.creditTotal = 0;
  for (let i = 0; i < state.rows.length; i++){
    state.creditTotal += Number(state.rows[i].credit)
  }
  if (state.creditTotal === 0) state.creditTotal = '';
  Number(state.creditTotal) === Number(state.debtTotal) ? state.isBalanced = true : state.isBalanced = false;  
}

export default accounts;