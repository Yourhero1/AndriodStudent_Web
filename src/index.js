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

let rewriteHis = function(type){
  let origin = window.history[type]
  return function(){
    let rs = origin.apply(this, arguments)
    let e = new Event(type.toLocaleLowerCase())
    e.arguments = arguments
    window.dispatchEvent(e)
    return rs
  }
}

window.history.pushState = rewriteHis('pushState')

window.history.replaceState = rewriteHis('replaceState')


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

export default store;