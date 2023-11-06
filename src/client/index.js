import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
