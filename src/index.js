import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import apiClient from './client'

ReactDOM.render(
  <ApolloProvider client={apiClient}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
