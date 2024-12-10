import axiosClient from "./axiosClient";
import { LoginRequest, LoginResponse, RefreshTokenResponse, RegisterRequest, RegisterResponse } from "./types/authTypes";

const authApi = {
    login: (data: LoginRequest): Promise<LoginResponse> => {
        return axiosClient.post("/auth/login",data)
        .then(res => res.data)
        .catch((error) => {
            console.log("Login error",error)
            throw error;
        })
    },
    register: (data: RegisterRequest): Promise<RegisterResponse> => {
        return axiosClient.post("/auth/register",data)
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