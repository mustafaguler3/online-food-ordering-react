import { Address } from "../models/Address";
import { SavedCard } from "../models/SavedCard";
import { User } from "../models/User";
import axiosClient from "./axiosClient";

const userApi = {
    getUserProfile: () : Promise<User> => {
        return axiosClient.get("/user/account/profile")
        .then(res => res.data)
        .catch(error => {
            throw error
        })
    },

    addAddress: (address: Address): Promise<Address> => {
      return axiosClient.post(`/add-address`,address)
      .then(res => res.data)
      .catch(error => {
        throw error
    })
  },
    getSavedAddress: () : Promise<Address[]> => {
      return axiosClient.get(`/user/account/address`)
      .then(res => res.data)
      .catch(error => {
        console.log("Error ",error)
        throw error;
      })
    },
    getSavedCards: () : Promise<SavedCard[]> => {
      return axiosClient.get(`/cards/saved-cards`)
      .then(response => response.data)
      .catch(error => {
        console.log("error ",error)
        throw error;
      })
    }
}

export default userApi;