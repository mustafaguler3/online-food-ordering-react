import userApi from "../api/userApi"


const userService = {
    getUserInfo: async () => {
        const response = await userApi.getUserInfo();
        return response;
    }
}

export default userService;