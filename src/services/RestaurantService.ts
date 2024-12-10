import axios from "axios";
import { Restaurant } from "../models/Restaurant";
import restaurantApi from "../api/restaurantApi";

const apiUrl = process.env.REACT_APP_API_URL;

class RestaurantService {

    async getRestaurants(): Promise<Restaurant[] | void>{
        try {
            const response = await restaurantApi.restaurants()
            console.log("Resraurants -> " , response.data)

            return response.data;
        } catch (error) {
            console.log("Error -> ",error)
            throw error
        }
    }

    async getRestaurant(id: any): Promise<Restaurant | void> {
        try {
            const response = await restaurantApi.restaurant(id)
            return response;
        }catch(error) {
            throw error;
        }
    }

    getRestaurantImage(image: string) {
        return `${apiUrl}/auth/uploads/products/${image}`;
    }
    getRestaurantIcon(image: string) {
        return `${apiUrl}/auth/uploads/restaurants/${image}`;
    }
}

export default new RestaurantService()