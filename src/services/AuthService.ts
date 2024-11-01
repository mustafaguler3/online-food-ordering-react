import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { RegisterForm } from '../models/register-form';

interface User {
  email: string;
  password: string;
}

interface JwtResponse {
  token: string;
}

interface MyJwtResponse {
  firstName: string;
  lastName: string;
  profileImage: string;
  phoneNumber: string;
  email: string;
}

const apiUrl = process.env.REACT_APP_API_URL;

class AuthService {
  private currentUser: MyJwtResponse | null = null;

  constructor() {
    const storedUser = localStorage.getItem("currentUser");
    this.currentUser = storedUser ? JSON.parse(storedUser) : null;
    console.log("API URL:", process.env.REACT_APP_API_URL);

  }
  getUserValue() {
    return this.currentUser;
  }
  getProfileImage(image: string) {
    return `${apiUrl}/uploads/users/${image}`;
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
  

  async login(user: User): Promise<void> {
    try {
      const response = await axios.post<JwtResponse>(`${apiUrl}/login`, user);

      if (response.data.token) {
        const decodedToken = jwtDecode<MyJwtResponse>(response.data.token);

        const currentUser: MyJwtResponse = {
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          profileImage: decodedToken.profileImage,
          phoneNumber: decodedToken.phoneNumber,
          email: decodedToken.email
        };

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        this.currentUser = currentUser;
      }
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
    localStorage.removeItem("currentUser");
    this.currentUser = null;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
