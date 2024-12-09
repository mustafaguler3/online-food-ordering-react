import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { RegisterForm } from '../models/Register';
import authApi from '../api/authApi';
import { User } from '../models/User';


const apiUrl = process.env.REACT_APP_API_URL;

class AuthService {

  getProfileImage(image: string) {
    return `${apiUrl}/auth/uploads/users/${image}`;
  }

  async register(user: RegisterForm, profileImage: File) {
    const formData = new FormData();
    formData.append("user", new Blob([JSON.stringify(user)], { type: "application/json" }));
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
  
    try {
      const response = await axios.post<RegisterForm>(`${apiUrl}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
  

  async login(user: any) {
    try {
      const response = await authApi.login(user)

      localStorage.setItem("accessToken",response.accessToken);
      localStorage.setItem("refreshToken",response.refreshToken);

      return response.user;
    } catch (error:any) {
      console.error("Login error:", error);

      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          throw new Error(error.response.data.message || "Invalid email or password");
        } else if (error.response) {
          throw new Error(`Login failed with status ${error.response.status}`);
        }
      }
      
    }
  }

  logout() {
    localStorage.clear();
  }
}

export default new AuthService();
