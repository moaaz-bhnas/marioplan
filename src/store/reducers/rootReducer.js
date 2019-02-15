import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  // These two props are on the store's state
  // The authReducer will update information on the auth property
  // The projectReducer will update information on the project property
  // Each reducer has its own state, you can access using the name you give to the reducer here
  auth: authReducer,
  project: projectReducer,
  /* firestoreReducer
  - This autmatically syncs our property (firestore) on the state to our data in the database
  - The data it retrieves depends on the currently active component (the data it needs)
  */
  firestore: firestoreReducer,
  // This will sync our firebase info (including auth status to this property on the state)
  firebase: firebaseReducer 
});

export default rootReducer;