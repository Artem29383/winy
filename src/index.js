import React from 'react';
import { render } from 'react-dom';
import { GlobalStyles } from 'styles/index';
import App from './components/App';

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
