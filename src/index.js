import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './components/reducers/index'
import {BrowserRouter} from 'react-router-dom';


export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // to do list : only return one component 
  




ReactDOM.render(
    <App />,
  document.getElementById('root')
);