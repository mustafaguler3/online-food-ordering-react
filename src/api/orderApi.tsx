import { Order } from "../models/Order";
import axiosClient from "./axiosClient";

const apiUrl = process.env.REACT_APP_API_URL;

const orderApi = {
    create: (data: Order) => {
        return axiosClient.post(`${apiUrl}/order/create`,data)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
        
    },
}
export default orderApi;