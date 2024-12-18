import userApi from "../api/userApi"
import { Address } from "../models/Address";

const userService = {
    getUserProfile: async () => {
        const response = await userApi.getUserProfile();
        return response;
    },
    addAddress: async (address: Address) => {
        try {
            const response = await userApi.addAddress(address);
        return response;
        }catch(error) {
            console.log("Error ",error)
            throw error
        }
    },
    getAddress: async () : Promise<Address[]> => {
        const response = await userApi.getSavedAddress();
        return response;
    }
}

export default userService;