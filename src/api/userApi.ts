import { User } from "../models/User";
import axiosClient from "./axiosClient";

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
    }
}

export default userApi;