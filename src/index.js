import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reducers from './reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  
  
  
, document.getElementById('root'));


