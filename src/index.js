import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
