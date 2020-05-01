import React from 'react';
import { View } from 'react-native';

import { createStore } from 'redux';

import App from './src/component/App';
import appReducers from './src/reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  appReducers,

);


export default function Main() {
  return (
    <Provider store = {store} >
      <App />
    </Provider>
  );
}
