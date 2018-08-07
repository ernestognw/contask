import accountList from './initialState/account-list.js';

const initialState = {
  rows: [
    { 
      account: '',
      initial: '',
      debt: '',
      credit: '',
      final: '00.00',
    },
    { 
      account: '',
      initial: '',
      debt: '',
      credit: '',
      final: '00.00',
    },
    { 
      account: '',
      initial: '',
      debt: '',
      credit: '',
      final: '00.00',
    },
    { 
      account: '',
      initial: '',
      debt: '',
      credit: '',
      final: '00.00',
    },
    { 
      account: '',
      initial: '',
      debt: '',
      credit: '',
      final: '00.00',
    }
  ],
  accountsList: accountList,
  isBalanced: true,
  XML_file: '',
  debtTotal: '',
  creditTotal: '',
};

export default initialState;
