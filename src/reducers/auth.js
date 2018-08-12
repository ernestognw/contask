import {
  LOGIN,
  SIGNUP,
  VERIFY_USER
} from "../actions/action-types";
import firebase from 'firebase/app';
import 'firebase/auth';

let initialState = {
  currentUser: null,
}

function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP: 
      firebase.auth().createUserWithEmailAndPassword(action.payload.email, action.payload.password)
      .then(status => {
        console.log(status.operationType)
      })
        .catch(error => {
        console.log(error)
      });
      console.log(state.operationType)
      return {
        ...state
      }

      case LOGIN:
        return {
          ...state,
          currentUser: null,
        }

      case VERIFY_USER:
        if (action.payload.user === null) {
          state.currentUser = '';
        }
        return {
          ...state,
          currentUser: state.currentUser
        }

    default: 
      return state;
  }
}

export default auth;