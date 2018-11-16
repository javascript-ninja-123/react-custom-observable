import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {createEpicMiddleware} from 'redux-observable';

import reducers from './reducers';
import Router from './router';

import rootEpic from './epics';
import obsMiddleware from './obs';
const epicMiddleware = createEpicMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk,middleware,epicMiddleware,obsMiddleware)
  )
)
epicMiddleware.run(rootEpic);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<div>loading</div>}>
      <Router/>
      </Suspense>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
