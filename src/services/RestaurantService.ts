import axios from "axios";
import { Restaurant } from "../models/Restaurant";

const apiUrl = process.env.REACT_APP_API_URL;

class RestaurantService {

    async getRestaurants(): Promise<Restaurant[] | void>{
        try {
            const response = await axios.get<Restaurant[]>(`${apiUrl}/restaurants`)
            console.log("Resraurants -> " , response.data)

            return response.data;
        } catch (error) {
            console.log("Error -> ",error)
            throw error
        }
    }

    async getRestaurant(id: any): Promise<Restaurant | void> {
        try {
            const response = await axios.get<Restaurant>(`${apiUrl}/restaurants/${id}`)

            return response.data;
        }catch(error) {
            throw error;
        }
    }

    getRestaurantImage(image: string) {
        return `${apiUrl}/auth/uploads/restaurants/${image}`;
    }
}

export default new RestaurantService()