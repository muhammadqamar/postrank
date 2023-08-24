/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API || ''}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </GoogleOAuthProvider>
    ,
  </BrowserRouter>,
);
