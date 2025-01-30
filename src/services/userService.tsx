import userApi from "../api/userApi"
import { Address } from "../models/Address";
import { SavedCard } from "../models/SavedCard";

const userService = {
    
    getSavedCards: async (): Promise<SavedCard[]> => {
        const response = await userApi.getSavedCards();
        console.log("userService saved. ",response)
        return response;
    },
    addCreditCard: async (card: SavedCard) => {
        const response = await userApi.addCreditCard(card)

        return response;
    },
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