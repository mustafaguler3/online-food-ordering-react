import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { User } from "../models/User";
import userService from "../services/userService";
import AuthService from "../services/AuthService";

interface UserContextProps {
    user: User;
    login: (user: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider: React.FC<React.PropsWithChildren> = ({children}:any) => {
    const [user, setUser] = useState<User | any>(null)

    const loadUser = async () => {
        try {
            const userData = await userService.getUserInfo();
            setUser(userData)
        }catch (error) {
            console.error("Failed to load user: ", error)
        }
    }

    useEffect(() => {
        loadUser()
    },[])

    const login = async (user: any) => {
        const userr = await AuthService.login(user);
        setUser(userr)
    }

    const logout = () => {
        AuthService.logout();
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user,login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context;
}