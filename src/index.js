import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './components/reducers/index'
import middleware from "./middleware"

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