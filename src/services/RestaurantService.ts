import axios from "axios";
import { Restaurant } from "../models/restaurant";

const apiUrl = process.env.REACT_APP_API_URL;

class RestaurantService {

    
    async getRestaurants(){
        try {
            const response = await axios.post<Restaurant>(`${apiUrl}/restaurants`)
            console.log("Resraurants -> " , response.data)
        } catch (error) {
            console.log("Error -> ",error)
        }
    }
}

export default new RestaurantService()