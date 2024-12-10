import { Restaurant } from "../models/Restaurant";
import axiosClient from "./axiosClient"


const restaurantApi = {

    restaurants: () => {
        return axiosClient.get(`/restaurants`)
    },
    restaurant: (id: number) : Promise<Restaurant> => {
        return axiosClient.get(`/restaurants/${id}`)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
    }

}

export default restaurantApi;