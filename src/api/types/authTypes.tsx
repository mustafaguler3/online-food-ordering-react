import { User } from "../../models/User";

export interface LoginRequest {
    email: string;
    password: string
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User
}
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    phoneNumber: string
}
export interface RegisterResponse {
    message: string
}
export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
  }