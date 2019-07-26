import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import {rootReducer as rootNewsReducer} from "./news/index";
import {rootReducer as rootScheduleReducer} from "./schedule/index";
import {rootReducer as rootSettingsReducer} from "./settings/index";
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

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}