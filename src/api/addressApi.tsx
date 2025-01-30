import { Address } from "../models/Address";
import axiosClient from "./axiosClient";

const apiUrl = process.env.REACT_APP_API_URL;

const addressApi = {
    addAddress: (data: Address) => {
        return axiosClient.post(`${apiUrl}/add-address`,data)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
        
    },
    getAddress: (addressId?: any) => {
        if (!addressId) return Promise.reject("Address ID is required");
        return axiosClient.get(`${apiUrl}/address/get-address?addressId=${addressId}`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
    }
}

export default addressApi;