import {
  LOGIN,
  FB_LOGIN,
  SIGNUP,
  SIGNOUT,
  VERIFY_USER,
  AUTH_INPUT_CHANGE,
  PASSWORDS_NOT_EQUAL,
} from "../actions/action-types";

let initialState = {
  currentUser: '',
  username: '',
  email: '',
  password: '',
  verifyPassword: '',
  isVerifyPasswordInput: false,
  arePasswordsEqual: false,
  passwordsNotEqualMessage: false,
  authenticating: true,
  redirectFromLogin: false,
}

function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP: 
      console.log(action.payload.status)
      console.log(action.payload.username)      
      return {
        ...state,
        redirectFromLogin: true,
      }

    case LOGIN:
      console.log(action.payload.status)        
      return {
        ...state,
        redirectFromLogin: true,
      }

    case FB_LOGIN:
      console.log(action.payload.status)        
      return {
        ...state,
        redirectFromLogin: true,
      }

    case SIGNOUT:
      return {
        ...state,
        currentUser: null,
        redirectFromLogin: false,
      }

    case VERIFY_USER:
      console.log(action.payload.user)
      if(action.payload.user !== null) {
        state.redirectFromLogin = true
      }
      return { 
        ...state,
        currentUser: action.payload.user,
        authenticating: false,
        redirectFromLogin: state.redirectFromLogin,
      }

    case AUTH_INPUT_CHANGE:
      if (action.payload.id === 'usernameInput'){
        state.username = action.payload.value
      }
      if (action.payload.id === 'emailInput'){
        state.email = action.payload.value          
      }
      if (action.payload.id === 'passwordInput'){
        state.password = action.payload.value
        if (action.payload.value === ''){
          state.isVerifyPasswordInput = false;
          state.passwordsNotEqualMessage = false;
        } else {
          state.isVerifyPasswordInput = true;            
        }
        if (state.password === state.verifyPassword){
          state.arePasswordsEqual = true;
          state.passwordsNotEqualMessage = false; 
        } else {
          state.arePasswordsEqual = false;
        }
      }
      if (action.payload.id === 'verifyPasswordInput'){
        state.verifyPassword = action.payload.value
        if (state.password === state.verifyPassword){
          state.arePasswordsEqual = true;
          state.passwordsNotEqualMessage = false;             
        } else {
          state.arePasswordsEqual = false;
        }
      }
      return {
        ...state,
        username: state.username,
        email: state.email,
        password: state.password,
        verifyPassword: state.verifyPassword,
        isVerifyPasswordInput: state.isVerifyPasswordInput,
        arePasswordsEqual: state.arePasswordsEqual,
        passwordsNotEqualMessage: state.passwordsNotEqualMessage,          
      }
    
    case PASSWORDS_NOT_EQUAL:
      state.passwordsNotEqualMessage = true;
      return {
        ...state,
        passwordsNotEqualMessage: state.passwordsNotEqualMessage,
      }

    default: 
      return state;
  }
}

export default auth;