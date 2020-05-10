import React from 'react';
import { render } from 'react-dom';
import { GlobalStyles } from 'styles/index';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
