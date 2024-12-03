import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../features/Catalog/Home";
import Login from "../features/Auth/Login";
import Register from "../features/Auth/Register";
import Profile from "../features/Auth/User/Profile";
import RestaurantDetail from "../features/Restaurants/RestaurantDetails/RestaurantDetail";
import Restaurants from "../features/Restaurants/RestaurantList/Restaurants";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path:"",element: <Home/>},
            {path:"/login",element: <Login/>},
            {path:"/register",element: <Register/>},
            {path:"/profile",element: <Profile/>},
            {
                path: "/restaurants",
                children: [
                    {path:"",element:<Restaurants/>},
                    {path:":restaurantId",element: <RestaurantDetail/>}
                ]
            }
        ]
    }
])