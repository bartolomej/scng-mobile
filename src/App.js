import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import {rootReducer} from "./news/index";

import NewsScreen from './news/screens/News';

const store = createStore(rootReducer);

export default () => {

  return (
    <Provider store={store}>
      <NewsScreen/>
    </Provider>
  );
}