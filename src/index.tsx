import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import Theme from './theme/Theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Store from './redux/store/Store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='247129245560-2gugbtd1icifol79oiecrkctms5au073.apps.googleusercontent.com'>
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
