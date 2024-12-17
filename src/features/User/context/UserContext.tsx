import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../../../models/User";
import userService from "../../../services/userService";
import authService from "../../../services/authService";
import userApi from "../../../api/userApi";
import { Address } from '../../../models/Address';


interface UserContextProps {
    user: User;
    login: (user: User) => void;
    logout: () => void;
    address: Address
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider: React.FC<React.PropsWithChildren> = ({children}:any) => {
    const [user, setUser] = useState<User | any>(null)
    const [address, setAddress] = useState<Address[] | any>(null)

    const loadUser = async () => {
        try {
            const userData = await userService.getUserProfile();
            setUser(userData)
            setAddress(userData.addresses)
        }catch (error) {
            console.error("Failed to load user: ", error)
        }
    }

    useEffect(() => {
        loadUser()
    },[])

    const login = async (user: any) => {
        const userr = await authService.login(user);
        setUser(userr)
    }

    const logout = () => {
        authService.logout();
        setUser(null)
    }

    return (
        <UserContext.Provider value={{address,user,login, logout}}>
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