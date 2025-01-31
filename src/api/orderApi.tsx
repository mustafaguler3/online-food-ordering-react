import { Order } from "../models/Order";
import axiosClient from "./axiosClient";

const apiUrl = process.env.REACT_APP_API_URL;

const orderApi = {
    create: (data: Order): Promise<void> => {
        return axiosClient.post(`${apiUrl}/order/create`,data)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
        
    },
    myOrders: () => {
        return axiosClient.get(`${apiUrl}/order/user`)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
    },
    myOrder: (orderId:number) => {
        return axiosClient.get(`${apiUrl}/order/user/orders?orderId=${orderId}`)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
    }
}
export default orderApi;