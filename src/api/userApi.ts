import { User } from "../models/User";
import axiosClient from "./axiosClient";
import { Address } from "./types/userTypes";

const userApi = {
    getUserInfo: () : Promise<User> => {
        return axiosClient.get("/auth/user")
        .then(res => res.data)
        .catch(error => {
            if (error.response) {
                // Backend'den gelen yanıtı hata olarak atıyoruz
                throw error.response; // Hata yanıtının tamamını atıyoruz, içindeki data'yı kontrol edebilirsiniz
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
    }
}

export default userApi;