import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "remixicon/fonts/remixicon.css";
import "./i18n/i18n";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes";
import { CartProvider } from "./features/Cart/context/CartContext";
import { UserProvider } from "./features/User/context/UserContext";
import { store } from "./store/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
