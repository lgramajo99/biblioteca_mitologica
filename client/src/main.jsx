import React from 'react';
import ReactDOM from 'react-dom/client'; // Ajusta la importación aquí
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { Auth0Provider } from '@auth0/auth0-react'


const domain = 'dev-z2q28njqmia2qrms.us.auth0.com';
const clientId = '7NyP4uyUyk00I4rq7c1Wz4DhhrTjdUa5';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}>
          <App />
        </Auth0Provider>
      </Provider>
    </Router>
  </React.StrictMode>,
);
