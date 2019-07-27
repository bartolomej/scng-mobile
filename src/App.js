import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import {rootReducer as rootNewsReducer, fetchState as fetchNewsState} from "./news/index";
import {rootReducer as rootScheduleReducer, fetchState as fetchScheduleState} from "./schedule/index";
import {rootReducer as rootSettingsReducer, fetchState as fetchSettingsState} from "./settings/index";
import Navigation from './navigation';

const store = createStore(
  combineReducers({
    news: rootNewsReducer,
    schedule: rootScheduleReducer,
    settings: rootSettingsReducer
  }),
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

export default () => {
  fetchNewsState(store.dispatch);
  fetchScheduleState(store.dispatch);
  fetchSettingsState(store.dispatch);

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}