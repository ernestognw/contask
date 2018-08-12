import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDKevLFRSEB4U3ypFHPqK-x0aWonp6l8MI",
  authDomain: "contask-a00b4.firebaseapp.com",
  databaseURL: "https://contask-a00b4.firebaseio.com",
  projectId: "contask-a00b4",
  storageBucket: "contask-a00b4.appspot.com",
  messagingSenderId: "731081581700"
};

firebase.initializeApp(config);

export const firestoreRef = firebase.storage().ref();