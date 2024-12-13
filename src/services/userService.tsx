import { Address } from "../api/types/userTypes";
import userApi from "../api/userApi"


const userService = {
    getUserInfo: async () => {
        const response = await userApi.getUserInfo();
        return response;
    },
    addAddress: async (address: Address) => {
        const response = await userApi.addAddress(address);
        return response;
    }
}

export default userService;