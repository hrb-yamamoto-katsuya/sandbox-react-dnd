import React from 'react';
import ReactDOM from 'react-dom';

import * as ReactRedux from 'react-redux';

import { App } from './app/app';

import { createStore } from './app/store';

import 'minireset.css';

const store = createStore();
ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
