
import React from 'react';
import './index.css';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';

import App from './containers/app';

let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
