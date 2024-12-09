import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css';
import './i18n/i18n'; 
import "./App.css"
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <UserProvider>
          <RouterProvider router={router} />
      </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
