import firebase from 'firebase/app'; // (app) Just the base features
import 'firebase/firestore'; // The database
import 'firebase/auth';

var config = {
  // Identify which firebase project on the backend to connect to
  apiKey: "AIzaSyA6_S5iyEEfokvUVbMz3Q9v8GLnmfRTpzE",
  authDomain: "marioplan-7bc2c.firebaseapp.com",
  databaseURL: "https://marioplan-7bc2c.firebaseio.com",
  projectId: "marioplan-7bc2c",
  storageBucket: "marioplan-7bc2c.appspot.com",
  messagingSenderId: "895548609990"
};

firebase.initializeApp(config); // Connect
firebase.firestore().settings({}); // Just an update :D

export default firebase;