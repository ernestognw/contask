import { 
  DELETE_ROW,
  ADD_ROW,
  SELECT_CHANGE,
  INPUT_CHANGE,
  CHECK_EMPTY,
  UPLOAD_XML_FILE,
  LOGIN,
  FB_LOGIN,
  SIGNUP,
  SIGNOUT,
  VERIFY_USER,
  AUTH_INPUT_CHANGE,
  PASSWORDS_NOT_EQUAL,
 } 
from "./action-types";

import firebase from 'firebase/app';
import 'firebase/auth';
import { FBProvider } from '../config/firebase';

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

export function handleUploadXMLFile (uid) {
  return {
    type: UPLOAD_XML_FILE,
    payload: {
      uid: uid
    }
  }
}

function handleSignup(username, status) {
  return {
    type: SIGNUP,
    payload: {
      username,
      status,
    }
  }
}

export function handleSignupAsync(username, email, password) {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(status => {
        dispatch(handleSignup(username, status))
      })
      .catch(error => {
        dispatch(handleSignup(username, error))        
      });
  }
}

export function handleSignout() {
  firebase.auth().signOut()  
  return {
    type: SIGNOUT,
  }
}

function handleLogin(status) {
  return {
    type: LOGIN,
    payload: {
      status,
    }
  }
}

export function handleLoginAsync(email, password) {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(status => {
        dispatch(handleLogin(status));
      })
      .catch(error => {
        dispatch(handleLogin(error));
      });
  }
}

function handleFBLogin(status) {
  return {
    type: FB_LOGIN,
    payload: {
      status,
    }
  }
}

export function handleFBLoginAsync() {
  return (dispatch) => {
    firebase.auth().signInWithPopup(FBProvider)
      .then(status => {
        dispatch(handleFBLogin(status));
      })
      .catch(error => {
        dispatch(handleFBLogin(error));
      });
  }
}

export function equalPasswordsRequired(){
  return {
    type: PASSWORDS_NOT_EQUAL
  }
}

function verifyUser(user) {
  return {
    type: VERIFY_USER,
    payload: {
      user: user,
    }
  }
}

export function verifyUserAsync() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged(authUser => {
      dispatch(verifyUser(authUser))
    });
  }
}

export function authInputChange(id, value) {
  return {
    type: AUTH_INPUT_CHANGE,
    payload: {
      id: id,
      value: value,
    }
  }
}