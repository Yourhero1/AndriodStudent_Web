import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import setToken from './utils/setToken';
import { setCurrentUser } from './actions/actions';
import jwtDecode from 'jwt-decode';
import Routes from './routes';
//创建全局管理 store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

if (localStorage.jwtToken) {
  setToken(localStorage.getItem('jwtToken'));
  store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('jwtToken'))));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

export default store;