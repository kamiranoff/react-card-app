/**
 *
 * STATE
 * Try to make it as flat as possible
 *
 * {
 *  card:[],
 *  decks:[],
 *  selectedDeckId:123
 *  studyMode : true/false
 *
 * }
 *
 *
 **/

import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {Router,Route,browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './reducers/reducers';
reducers.routing = routerReducer;

import LocalStorage from './localStorage';

import App from './components/App';
import VisibleCards from './components/VisibleCards';
import NewCardModal from './components/NewCardModal';

console.log('Main - reducers',reducers);
const store = createStore(combineReducers(reducers), LocalStorage.get());
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Route path="/" component={App} >
    <Route path='/deck/:deckName/:deckId' component={VisibleCards}>
      <Route path='/deck/:deckName/:deckId/new' component={ NewCardModal }> </Route>
    </Route>
  </Route>
);
// props are what is inside the app tag
function run() {
  let state = store.getState();

  LocalStorage.set(state,['decks','cards']);

  ReactDom.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>, document.getElementById('root'));
}

run();
store.subscribe(run);

