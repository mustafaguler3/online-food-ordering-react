// Axios konfigurasyonu ve interceptor'lar

import axios, { AxiosError, AxiosResponse } from "axios"
import { error } from "console";
import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_API_URL

const axiosClient = axios.create({
    baseURL,
    timeout: 10000
})

axiosClient.interceptors.request.use((config) => {
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

    if(error.response?.status === 500) {
        toast.error("Sunucuda bir hata oluştu, lütfen daha sonra tekrar deneyin.")
    }else if (error.response?.status === 403) {
        //window.location.href = "/unauthorized";
        toast.warning("Yetkiniz kaldırılmış. Lütfen tekrar giriş yapın.");
    localStorage.clear(); // Kullanıcı verilerini temizle
    window.location.href = "/login"; // Giriş ekranına yönlendir
    }else if (error.response?.status === 404) {
        toast.info("Aradığınız kaynak bulunamadı.");
    }else if (error.response?.status === 400) {
        toast.info(error.message);
    }

    if(error.response?.status === 401) {
        // toekn yenileme süreci
        const originalRequest = error.config as any;
        const refreshToken = localStorage.getItem("refreshToken");

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