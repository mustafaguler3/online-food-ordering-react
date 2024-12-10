import { Basket } from "../features/Cart/types/cartTypes";
import axiosClient from "./axiosClient";


const cartApi = {

    getBasket: (userId: any) : Promise<Basket> => {
        return axiosClient.get(`/basket?userId=${userId}`)
        .then(res => res.data)
        .catch(error => {
            console.log("Basket Error ",error.message)
            throw error;
        })
    },
    addToCart: (productId: number, quantity: number) : Promise<void> => {
        return axiosClient.post(`/basket/add`,{productId,quantity})
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
    }

}

export default cartApi;