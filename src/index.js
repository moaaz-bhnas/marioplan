import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'; // Pass the store into our app
import thunk from 'redux-thunk';
// We'll use them to interact with Firebase API
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig' 

/* .withExtraArgument
- You remember that Thunk lets us return a function that pauses the dispatch?
- Using this method, we can call this function with an extra argument (object in this case)
*/
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), // Store enhancer 1
    // useFirestoreForProfile: means I want you (firebaseReducer) to use Firestore to sync to the profile property.
    // userProfile: where to get user profile from.
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true, useFirestoreForProfile: true, userProfile: 'users'}), // Store enhancer 2
    reduxFirestore(fbConfig) // Store enhancer 3
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
  );
});

serviceWorker.unregister();
