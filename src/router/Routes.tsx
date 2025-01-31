import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../features/Catalog/Home";
import Login from "../features/Auth/Login";
import Register from "../features/Auth/Register";
import RestaurantDetail from "../features/Restaurants/RestaurantDetails/RestaurantDetail";
import Restaurants from "../features/Restaurants/RestaurantList/Restaurants";
import CartPage from "../features/Cart/pages/CartPage";
import Profile from "../features/User/Profile";
import ChangeProfile from "../features/User/ChangeProfile";
import SavedAddress from "../features/User/SavedAddress";
import SavedCards from "../features/User/SavedCards";
import CheckoutPage from "../features/Checkout/pages/CheckoutPage";
import ProtectedRoute from "./ProtectedRoute";
import MyOrders from "../features/User/MyOrders";

const isAuthenticated = localStorage.getItem("accessToken") !== null; // Kullanıcı giriş yapmış mı kontrol et

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            {
                path: "/cart",
                element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
                children: [{ path: "", element: <CheckoutPage /> }],
            },
            {
                path: "/checkout",
                element: <ProtectedRoute isAuthenticated={isAuthenticated} />, // Korumalı rota
                children: [{ path: "", element: <CheckoutPage /> }],
            },
            {
                path: "profile",
                element: <Profile />, // Kullanıcı profili de korumalı olabilir
                children: [
                    { path: "", element: <ChangeProfile /> },
                    { path: "change-profile", element: <ChangeProfile /> },
                    { path: "saved-address", element: <SavedAddress /> },
                    { path: "saved-cards", element: <SavedCards /> },
                    {path:"my-orders",element:<MyOrders />}
                ],
            },
            {
                path: "restaurants",
                children: [
                    { path: "", element: <Restaurants /> },
                    { path: ":restaurantId", element: <RestaurantDetail /> },
                ],
            },
        ],
    },
]);