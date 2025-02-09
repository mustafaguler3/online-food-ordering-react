// Axios konfigurasyonu ve interceptor'lar

import axios, { AxiosError, AxiosResponse } from "axios"
import { error } from "console";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_API_URL

const axiosClient = axios.create({
    baseURL,
    timeout: 10000
})

axiosClient.interceptors.request.use((config:any) => {
    const token = localStorage.getItem("accessToken");

    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},
(error) => Promise.reject(error))


// Interceptor: 401 (Unauthorized) durumunda token yenileme
axiosClient.interceptors.response.use((response) => response, 
    async (error: AxiosError) => {
    if(error.response?.status === 401) {
        // toekn yenileme süreci
        const originalRequest = error.config as any;
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            toast.error("Session expired. Please log in again.");
            localStorage.clear();
            window.location.href = "/login";
            return Promise.reject(error);
        }

        if(refreshToken && !originalRequest._retry){
            originalRequest._retry = true

            try {
                const {data} = await axios.post(`${baseURL}/auth/refresh-token`,{refreshToken});

                localStorage.setItem("accessToken",data.accessToken);
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

                return axiosClient(originalRequest)
            }catch(refreshError){
                console.log("Token refresh failed: ", refreshError)
                localStorage.clear(); // token geçersiz oturumuu kapat
                window.location.href = "/login"; // giriş ekranına yönlendir
            } 
        }
    
        return Promise.reject(error.response);
    }
    return Promise.reject(error)
}
    
)

export default axiosClient;