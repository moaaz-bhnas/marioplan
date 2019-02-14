import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'; // Pass the store into our app
import thunk from 'redux-thunk';

/* applyMiddleware
- This function could take a list of middlewares.
- It turns into a store enhancer (enhaces the store with extra functionality, in this case the ability to return a function inside our action creators which can then interact with our database).
- We can add many store enhancers other than applyMiddleware.
*/
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
