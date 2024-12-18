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
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path:"",element: <Home/>},
            {path:"/cart",element:<CartPage/>},
            {path:"/login",element: <Login/>},
            {path:"/register",element: <Register/>},
            {
                path:"profile",element: <Profile />,
                children: [
                    {path:"",element: <ChangeProfile />},
                    {path:"change-profile",element: <ChangeProfile />},
                    {path:"saved-address",element: <SavedAddress />}
                ]
            },

            {
                path: "restaurants",
                children: [
                    {path:"",element:<Restaurants/>},
                    {path:":restaurantId",element: <RestaurantDetail/>}
                ]
            }
        ]
    }
])