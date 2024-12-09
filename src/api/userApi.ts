import { User } from "../models/User";
import axiosClient from "./axiosClient";

const userApi = {
    getUserInfo: () : Promise<User> => {
        return axiosClient.get("/auth/user")
        .then(res => res.data)
        .catch(error => {
            console.log("Error "+error)
            throw error;
        })
    }
}

export default userApi;