import { Basket } from '../features/Cart/types/cartTypes';
import axiosClient from "./axiosClient";

const cartApi = {
    getBasket: () : Promise<Basket> => {
        return axiosClient.get(`/basket`)
        .then(res => res.data)
        .catch(error => {
            console.log("Basket Error ",error.message)
            throw error;
        })
    },
    applyCode: (code: string)=> {
        return axiosClient.post(`/basket/applyCode?discountCode=${code}`)
        .then(response => response.data)
        .catch(error => {
            console.log("Basket Code Error ", error)
            throw error
        })
    },
    addToCart: (productId: number, quantity: number) : Promise<void> => {
        return axiosClient.post(`/basket/add`,{productId,quantity})
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
    },
    updateCart: (productId: number, quantity: number) => {
        return axiosClient.post(`/basket/update?productId=${productId}&quantity=${quantity}`)
        .then(res => res.data)
        .catch(error => {
            console.log("Error in cartApi :",error)
            throw error
        })
    }
}

export default cartApi;