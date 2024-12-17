import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css';
import './i18n/i18n'; 
import "./App.css"
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';
import { CartProvider } from './features/Cart/context/CartContext';
import CartPage from './features/Cart/pages/CartPage';
import { UserProvider } from './features/User/context/UserContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
