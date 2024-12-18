import axios from "axios";
import axiosClient from "./axiosClient";
import { LoginRequest, LoginResponse, RefreshTokenResponse, RegisterRequest, RegisterResponse } from "./types/authTypes";
import { User } from "../models/User";

const apiUrl = process.env.REACT_APP_API_URL;

const authApi = {
    login: (data: User) => {
        return axiosClient.post(`${apiUrl}/auth/login`,data)
        .then(res => res.data)
        .catch(error => {
            throw error;
        })
        
    },
    register: (data: RegisterRequest): Promise<RegisterResponse> => {
        return axiosClient.post(`${apiUrl}/auth/register`,data)
        .then(res => res.data)
        .catch((error) => {
            console.log("Register error",error)
            throw error;
        })
    },
    refreshToken: (refreshToken: string): Promise<RefreshTokenResponse> => {
        return axiosClient.post("/auth/refresh-token",{refreshToken})
        .then(res => res.data)
        .catch((error) => {
            console.log("Refresh token error",error)
            throw error;
        })
    }
}
export default authApi;