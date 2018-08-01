import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/accounts';
import initialState from './reducers/initialState';

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
  registerServiceWorker();
