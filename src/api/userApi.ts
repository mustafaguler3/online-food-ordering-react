import { Address } from "../models/Address";
import { User } from "../models/User";
import axiosClient from "./axiosClient";

const userApi = {
    getUserProfile: () : Promise<User> => {
        return axiosClient.get("/user/account/profile")
        .then(res => res.data)
        .catch(error => {
            if (error.response) {
                throw error.response; 
              } else {
                throw new Error('An unexpected error occurred');
              }
        })
    },

    addAddress: (address: Address): Promise<void> => {
      return axiosClient.post(`/user/add-address`,address)
      .then(res => res.data)
      .catch(error => {
        if(error.response) {
          throw error.response
        }else {
          throw new Error('An unexpected error occurred');
        }
      })
    },
    getSavedAddress: () : Promise<Address[]> => {
      return axiosClient.get(`/user/account/address`)
      .then(res => res.data)
      .catch(error => {
        console.log("Error ",error)
        throw error;
      })
    }
}

export default userApi;