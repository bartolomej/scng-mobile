import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import {rootReducer} from "./news/index";

import Navigation from './navigation';

const store = createStore(rootReducer);

export default () => {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}