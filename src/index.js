import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './components/reducers/index'
import {BrowserRouter} from 'react-router-dom';
import middleware from "./middleware"
import {composeWithDevTools} from 'redux-devtools-extension'

// export const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(...middleware),
// ));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware)
//   ));

const store=createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />,
    </Provider>,
  document.getElementById('root')
);